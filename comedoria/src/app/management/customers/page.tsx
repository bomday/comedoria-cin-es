import React from 'react';
import SearchBar from '@/app/management/customers/search-bar/page';
import Sidebar from '@/components/ui/sidebar'
import CustomerList from '@/app/management/customers/customer-list/page';
import Navbar from '@/components/ui/Navbar-manager'

const ClientManagementPage: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="flex flex-col h-screen bg-gray-100 mt-16">
    <h1 className="text-[52px] font-bold p-4 pb-2 text-[#556B2F]">Gerenciamento</h1>
    <div className="flex flex-1">
          <Sidebar />
          <div className="flex flex-col flex-1 shrink basis-4 min-w-[240px] max-md:max-w-full">
            <SearchBar />
            <CustomerList />
          </div>
        </div>
    </div></>
  );
};

export default ClientManagementPage;