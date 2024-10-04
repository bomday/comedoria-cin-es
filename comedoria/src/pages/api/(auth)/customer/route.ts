import { NextResponse } from 'next/server'
import connect from '@/lib/db';
import Customer from '@/lib/modals/customer';

export const GET = async () => {
  try {
    await connect();
    const customers = await Customer.find();
    return new NextResponse(JSON.stringify(customers), {status: 200});
  } catch (error: any) {
    return new NextResponse(error.message, {status: 500});
  }
  return 
}