import { NextResponse } from 'next/server'
import connect from '@/lib/db';
import Customer from '@/lib/modals/customer';

// Listar clientes ou pegar informações de cliente específico
export const GET = async (request: Request) => {
  try {
    await connect();

    // Extrair parâmetros da query string
    const url = new URL(request.url);
    const email = url.searchParams.get('email'); // Obter o email da query string

    // Se um email estiver presente nos parâmetros, busque o cliente específico
    if (email) {
      const customer = await Customer.findOne({ email: email });
      if (!customer) {
        return new NextResponse('Customer not found', { status: 404 });
      }
      return new NextResponse(JSON.stringify(customer), { status: 200 });
    } 
    
    // Se não houver email, liste todos os clientes
    const customers = await Customer.find();
    return new NextResponse(JSON.stringify(customers), { status: 200 });
    
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};

// Adicionar cliente
export const POST = async (request: Request) => {
  const { email, password, username } = await request.json();

  // Erro se algum dos campos está vazio ou não foi fornecido
  if (!email || !password || !username) {
    return new NextResponse('All fields (email, password, username) are required and cannot be empty', { status: 400 });
  }

  try {
    await connect();
    const newCustomer = new Customer({ email, password, username });
    await newCustomer.save();
    return new NextResponse(JSON.stringify(newCustomer), { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};

// Atualizar cliente
export const PUT = async (request: Request) => {
  // Extrair parâmetros da query string
  const url = new URL(request.url);
  const email = url.searchParams.get('email'); // Obter o email da query string

  const updates = await request.json(); // Campos de atualização fornecidos no corpo da requisição

  // Remove campos vazios do objeto de atualização
  Object.keys(updates).forEach(key => {
    if (!updates[key]) {
      delete updates[key];
    }
  });

  // Erro se campos estiverem vazios
  if (Object.keys(updates).length === 0) {
    return new NextResponse('No fields to update', { status: 400 });
  }

  try {
    await connect();

    const updatedCustomer = await Customer.findOneAndUpdate(
      { email }, // Busca pelo email na query string
      { $set: updates }, // Atualiza apenas os campos fornecidos
      { new: true } // Retorna o documento atualizado
    );
    
    // Erro se email não estiver no banco de dados
    if (!updatedCustomer) {
      return new NextResponse('Customer not found', { status: 404 });
    }

    return new NextResponse(JSON.stringify(updatedCustomer), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};

// Deletar cliente
export const DELETE = async (request: Request) => {
  // Extrair parâmetros da query string
  const url = new URL(request.url);
  const email = url.searchParams.get('email'); // Obter o email da query string

  try {
    await connect();
    const deletedCustomer = await Customer.findOneAndDelete({ email }); // Busca e deleta pelo email

    // Erro se cliente não está no banco
    if (!deletedCustomer) {
      return new NextResponse('Customer not found', { status: 404 });
    }
    return new NextResponse('Customer deleted successfully', { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};