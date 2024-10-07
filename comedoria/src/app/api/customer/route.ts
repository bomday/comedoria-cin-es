import { NextResponse } from 'next/server'
import connect from '@/lib/db'
import Customer from '@/lib/modals/customer'
import { getServerSession } from 'next-auth/next'
import bcrypt from 'bcryptjs'
import { authOptions } from '@/lib/auth'

// Função para listar ou pegar informações de cliente específico
export const GET = async (request: Request) => {
    const session = await getServerSession(authOptions);
    if (!session) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
        await connect();

        const url = new URL(request.url);
        const email = url.searchParams.get('email'); // Obter o email da query string

        if (email) {
            const customer = await Customer.findOne({ email: email });
            if (!customer) {
                return new NextResponse('Customer not found', { status: 404 });
            }
            return new NextResponse(JSON.stringify(customer), { status: 200 });
        }

        const customers = await Customer.find();
        return new NextResponse(JSON.stringify(customers), { status: 200 });
        
    } catch (error: any) {
        return new NextResponse(error.message, { status: 500 });
    }
};

// Função para adicionar um cliente
export const POST = async (request: Request) => {
    const { email, password, username } = await request.json();

    if (!email || !password || !username) {
        return new NextResponse('All fields (email, password, username) are required and cannot be empty', { status: 400 });
    }

    try {
        await connect();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newCustomer = new Customer({ email, password: hashedPassword, username });
        await newCustomer.save();

        const { password: _, ...customerWithoutPassword } = newCustomer.toObject();
        return new NextResponse(JSON.stringify(customerWithoutPassword), { status: 201 });
    } catch (error: any) {
        return new NextResponse(error.message, { status: 500 });
    }
};

// Atualizar cliente
export const PUT = async (request: Request) => {
    const session = await getServerSession(authOptions);
    if (!session) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    const url = new URL(request.url);
    const email = url.searchParams.get('email'); // Obter o email da query string
    const updates = await request.json(); // Campos de atualização fornecidos no corpo da requisição

    if (updates.password) {
        const salt = await bcrypt.genSalt(10);
        updates.password = await bcrypt.hash(updates.password, salt);
    }

    try {
        await connect();
        const updatedCustomer = await Customer.findOneAndUpdate(
            { email },
            { $set: updates },
            { new: true }
        ).select('-password');

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
    const session = await getServerSession(authOptions);
    if (!session) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    const url = new URL(request.url);
    const email = url.searchParams.get('email'); // Obter o email da query string

    try {
        await connect();
        const deletedCustomer = await Customer.findOneAndDelete({ email });
        if (!deletedCustomer) {
            return new NextResponse('Customer not found', { status: 404 });
        }
        return new NextResponse('Customer deleted successfully', { status: 200 });
    } catch (error: any) {
        return new NextResponse(error.message, { status: 500 });
    }
};