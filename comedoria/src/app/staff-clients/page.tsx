import React from 'react';
import SearchBar from '@/app/management/customers/search-bar/searchBar';
import Sidebar from '@/components/ui/sidebar'
import CustomerList from '@/app/management/customers/customer-list/customerList';

const ClientManagementPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-stone-50">
      <main className="flex overflow-hidden flex-col px-16 py-8 w-full min-h-[864px] max-md:px-5 max-md:max-w-full">
        <h1 className="text-5xl font-bold tracking-tighter leading-none text-lime-900 max-md:max-w-full max-md:text-4xl">
          Gerenciamento
        </h1>
        <div className="flex overflow-hidden flex-wrap gap-8 items-start mt-4 w-full max-md:max-w-full">
          <Sidebar />
          <div className="flex flex-col flex-1 shrink basis-4 min-w-[240px] max-md:max-w-full">
            <SearchBar />
            <CustomerList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientManagementPage;