import { NextResponse } from 'next/server';
import connect from '@/lib/db'; 
import Sale from '@/lib/modals/sale'; 

// Listar todas as vendas ou buscar vendas por funcionário, timestamps, tipo de pagamento, reservation_id
export const GET = async (request: Request) => {
  console.log('GET sales API called');
  try {
    await connect();

    const url = new URL(request.url);
    const sellerId = url.searchParams.get('seller_id'); // Buscar vendas por ID de vendedor
    const startDate = url.searchParams.get('startDate'); // Data de início
    const endDate = url.searchParams.get('endDate'); // Data de fim
    const paymentType = url.searchParams.get('payment'); // Tipo de pagamento
    const reservationId = url.searchParams.get('reservation_id'); // Buscar por ID de reserva

    if (sellerId || startDate || endDate || paymentType || reservationId) {
      let query = {};

      // Filtro por vendedor (ID de funcionário)
      if (sellerId) {
        query = { ...query, seller: sellerId };
      }

      // Filtro por intervalo de datas (timestamps)
      if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        // Verifica se as datas são válidas
        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
          return new NextResponse('Invalid date format', { status: 400 });
        }

        query = { 
          ...query, 
          createdAt: { 
            $gte: start, 
            $lte: end  
          } 
        };
      }

      // Filtro por tipo de pagamento
      if (paymentType) {
        query = { ...query, payment: paymentType };
      }

      // Filtro por reservation_id
      if (reservationId) {
        query = { ...query, reservation_id: reservationId };
      }

      // Buscar as vendas com base nos filtros definidos acima
      const sales = await Sale.find(query).populate('seller');
      if (sales.length === 0) {
        return new NextResponse('No sales found', { status: 404 });
      }

      return new NextResponse(JSON.stringify(sales), { status: 200 });
    }

    // Se nenhum parâmetro for passado, retorne todas as reservas
    const sales = await Sale.find();
    return new NextResponse(JSON.stringify(sales), { status: 200 });
    
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};

// Criar uma nova venda
export const POST = async (request: Request) => {
  try {
    const { seller, order, reservation_id, discount, payment } = await request.json();

    // Validação dos campos obrigatórios
    if (!seller || !order || !payment) {
      return new NextResponse('All fields (seller, order, payment) are required', { status: 400 });
    }

    await connect();

    // Criar uma nova venda
    const newSale = new Sale({
      seller,
      order,
      reservation_id: reservation_id || "", // Se não houver reservation_id, será uma string vazia
      discount: discount || false, // Se não houver desconto, será false
      payment
    });

    await newSale.save();
    return new NextResponse(JSON.stringify(newSale), { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};