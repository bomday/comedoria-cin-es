import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Staff from '@/lib/modals/staff';

// Listar funcionários ou pegar informações de funcionário específico
export const GET = async (request: Request) => {
  try {
    await connect();

    // Extrair parâmetros da query string
    const url = new URL(request.url);
    const email = url.searchParams.get('email'); // Obter o email da query string
    const seller = url.searchParams.get('seller'); // Obter o seller da query string

    // Se email estiver presente nos parâmetros, busque o funcionário específico
    if (email) {
      const staffMember = await Staff.findOne({ email: email });
      if (!staffMember) {
        return new NextResponse('Staff member not found', { status: 404 });
      }
      return new NextResponse(JSON.stringify(staffMember), { status: 200 });
    } 

    // Se seller estiver presente nos parâmetros, busque por vendedores ou gerentes
    if (seller) {
      const staffMember = await Staff.find({ seller: seller });
      if (!staffMember) {
        return new NextResponse('Staff member not found', { status: 404 });
      }
      return new NextResponse(JSON.stringify(staffMember), { status: 200 });
    } 
    
    // Se não houver email, liste todos os funcionários
    const staffMembers = await Staff.find();
    return new NextResponse(JSON.stringify(staffMembers), { status: 200 });
    
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};

// Adicionar funcionário
export const POST = async (request: Request) => {
  const { email, password, username, phone, seller, salary, products_sold, schedule } = await request.json();

  // Erro se algum dos campos obrigatórios estiver vazio
  if (!email || !password || !username || !phone) {
    return new NextResponse('Email, password, username, and phone are required and cannot be empty', { status: 400 });
  }

  try {
    await connect();
    const newStaffMember = new Staff({ email, password, username, phone, seller, salary, products_sold, schedule });
    await newStaffMember.save();
    return new NextResponse(JSON.stringify(newStaffMember), { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};

// Atualizar funcionário
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

  // Erro se não há campos para atualizar
  if (Object.keys(updates).length === 0) {
    return new NextResponse('No fields to update', { status: 400 });
  }

  try {
    await connect();

    const updatedStaffMember = await Staff.findOneAndUpdate(
      { email }, // Busca pelo email na query string
      { $set: updates }, // Atualiza apenas os campos fornecidos
      { new: true } // Retorna o documento atualizado
    );
    
    // Erro se email não estiver no banco de dados
    if (!updatedStaffMember) {
      return new NextResponse('Staff member not found', { status: 404 });
    }

    return new NextResponse(JSON.stringify(updatedStaffMember), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};

// Deletar funcionário
export const DELETE = async (request: Request) => {
  // Extrair parâmetros da query string
  const url = new URL(request.url);
  const email = url.searchParams.get('email'); // Obter o email da query string

  try {
    await connect();
    const deletedStaffMember = await Staff.findOneAndDelete({ email }); // Busca e deleta pelo email

    // Erro se funcionário não está no banco
    if (!deletedStaffMember) {
      return new NextResponse('Staff member not found', { status: 404 });
    }
    return new NextResponse('Staff member deleted successfully', { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};