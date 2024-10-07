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

    // Criar o objeto de busca com base nos parâmetros
    const query: any = {};

    // Se o customerId estiver presente, adiciona ao filtro
    if (customerId) {
      query.customer = customerId;
    }

    // Se o status estiver presente, adiciona ao filtro
    if (status !== null) {
      query.status = status === 'true'; // Converte o valor da string 'true'/'false' para booleano
    }

    // Buscar as reservas com base nos filtros definidos
    const reservations = await Reservation.find(query).populate('customer');

    // Se nenhuma reserva for encontrada, retorna uma mensagem de erro
    if (reservations.length === 0) {
      return new NextResponse('No reservations found matching the criteria', { status: 404 });
    }
    
    return new NextResponse(JSON.stringify(reservations), { status: 200 });

  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};

// Criar uma nova reserva
export const POST = async (request: Request) => {
  try {
    const { customer, order, shift } = await request.json();

    // Validação dos campos obrigatórios
    if (!customer || !order || !shift) {
      return new NextResponse('All fields (customer, order, shift) are required', { status: 400 });
    }

    await connect();
    
    // Criar uma nova reserva
    const newReservation = new Reservation({ customer, order, shift });
    await newReservation.save();
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