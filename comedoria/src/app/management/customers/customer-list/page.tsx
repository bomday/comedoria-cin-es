import React from 'react';
import CustomerItem from '@/app/management/customers/customer-item/page'

interface Customer {
  id: number;
  name: string;
  email: string;
}

const CustomerList: React.FC = () => {
  const customers: Customer[] = [
    { id: 1, name: 'Jose Emanuel Rodrigues', email: 'josemmanuelrodrigues@mail.com' },
    { id: 2, name: 'Jose Emanuel Rodrigues', email: 'josemmanuelrodrigues@mail.com' },
  ];

  return (
    <section className="flex flex-col mt-4 w-full max-md:max-w-full">
      {customers.map((customer) => (
        <CustomerItem key={customer.id} customer={customer} />
      ))}
    </section>
  );
};

export default CustomerList;