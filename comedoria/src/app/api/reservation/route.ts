import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Reservation from '@/lib/modals/reservation';

// Listar todas as reservas ou buscar por uma reserva específica
// GET: Listar todas as reservas ou buscar por ID de cliente e status
export const GET = async (request: Request) => {
  try {
    await connect();
    
    // Extrair parâmetros da query string
    const url = new URL(request.url);
    const customerId = url.searchParams.get('customer_id'); // Buscar reservas pelo ID do cliente
    const status = url.searchParams.get('status'); // Buscar reservas pelo status

    // Se o customerId estiver presente, busque as reservas desse cliente
    if (customerId) {
      const reservations = await Reservation.find({ customer: customerId }).populate('customer');
      if (reservations.length === 0) {
        return new NextResponse('No reservations found for the specified customer', { status: 404 });
      }
      return new NextResponse(JSON.stringify(reservations), { status: 200 });
    }

    // Se o status estiver presente, busque as reservas com base no status
    if (status) {
      const reservations = await Reservation.find({ status: status === 'true' }).populate('customer');
      if (reservations.length === 0) {
        return new NextResponse('No reservations found with the specified status', { status: 404 });
      }
      return new NextResponse(JSON.stringify(reservations), { status: 200 });
    }

    // Se nenhum parâmetro for passado, retorne todas as reservas
    const reservations = await Reservation.find().populate('customer');
    return new NextResponse(JSON.stringify(reservations), { status: 200 });

  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};

// Criar uma nova reserva
export const POST = async (request: Request) => {
  try {
    const { customer, order, shift } = await request.json();
    console.log(order)
    // Validação dos campos obrigatórios
    if (!customer || !order || !shift) {
      return new NextResponse('All fields (customer, order, shift) are required', { status: 400 });
    }

    await connect();
    console.log("CONECTOU")
    console.log(order)
    
    // Criar uma nova reserva
    const newReservation = new Reservation({ customer, order, shift });
    console.log('Reservation Data:', JSON.stringify(newReservation));
    await newReservation.save();
    console.log("SALVOU")
    return new NextResponse(JSON.stringify(newReservation), { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};

// Atualizar o status de uma reserva por ID
export const PUT = async (request: Request) => {
  try {
    const url = new URL(request.url);
    const reservationId = url.searchParams.get('id'); // ID da reserva a ser atualizada

    if (!reservationId) {
      return new NextResponse('Reservation ID is required', { status: 400 });
    }

    const { status } = await request.json();

    // Validação do campo status
    if (typeof status !== 'boolean') {
      return new NextResponse('Status must be a boolean', { status: 400 });
    }

    await connect();

    const updatedReservation = await Reservation.findByIdAndUpdate(
      reservationId,
      { status },
      { new: true }
    );

    return new NextResponse(JSON.stringify(updatedReservation), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};

// Deletar uma reserva por ID
export const DELETE = async (request: Request) => {
  try {
    const url = new URL(request.url);
    const reservationId = url.searchParams.get('id'); // ID da reserva a ser deletada

    if (!reservationId) {
      return new NextResponse('Reservation ID is required', { status: 400 });
    }

    await connect();

    const deletedReservation = await Reservation.findByIdAndDelete(reservationId);
    if (!deletedReservation) {
      return new NextResponse('Reservation not found', { status: 404 });
    }

    return new NextResponse('Reservation deleted successfully', { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};