import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Customer from '@/lib/modals/customer';
import { getServerSession } from 'next-auth/next';
import bcrypt from 'bcryptjs';
import { authOptions } from '@/lib/auth';

class CustomerAPI {
  // Listar clientes ou pegar informações de cliente específico
  public async getCustomers(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
      await connect();

      const url = new URL(request.url);
      const email = url.searchParams.get('email');

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
  }

  // Adicionar cliente
  public async addCustomer(user: { email: any; password: any; username: any }) {
    const { email, password, username } = user;
    if (!email || !password || !username) {
      return new NextResponse('All fields (email, password, username) are required and cannot be empty', { status: 400 });
    }

    try {
      await connect();
      const newCustomer = new Customer({ email, password, username });
      await newCustomer.save();

      const { password: _, ...customerWithoutPassword } = newCustomer.toObject();
      return new NextResponse(JSON.stringify(customerWithoutPassword), { status: 201 });
    } catch (error: any) {
      return new NextResponse(error.message, { status: 500 });
    }
  }

  // Atualizar cliente
  public async updateCustomer(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const url = new URL(request.url);
    const email = url.searchParams.get('email');
    const updates = await request.json();

    Object.keys(updates).forEach(key => {
      if (!updates[key]) {
        delete updates[key];
      }
    });

    if (Object.keys(updates).length === 0) {
      return new NextResponse('No fields to update', { status: 400 });
    }

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
  }

  // Deletar cliente
  public async deleteCustomer(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const url = new URL(request.url);
    const email = url.searchParams.get('email');

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
  }
}

// Instancia a classe CustomerAPI
const customerAPI = new CustomerAPI();

// Exporte as funções do manipulador da rota
export const GET = (request: Request) => customerAPI.getCustomers(request);
export const POST = (request: Request) => request.json().then(user => customerAPI.addCustomer(user));
export const PUT = (request: Request) => customerAPI.updateCustomer(request);
export const DELETE = (request: Request) => customerAPI.deleteCustomer(request);