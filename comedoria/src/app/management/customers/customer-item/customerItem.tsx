import React from 'react';

interface CustomerProps {
  customer: {
    name: string;
    email: string;
  };
}

const CustomerItem: React.FC<CustomerProps> = ({ customer }) => {
  return (
    <div className="flex overflow-hidden flex-wrap w-full rounded-xl border-amber-800 border-opacity-50 max-w-[1048px] min-h-[72px] max-md:max-w-full">
      <div className="flex flex-1 shrink gap-8 items-center px-6 py-5 h-full text-lg font-bold basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-8 items-start self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="text-neutral-800">{customer.name}</div>
          <div className="tracking-normal leading-none text-zinc-500">{customer.email}</div>
        </div>
      </div>
      <div className="flex gap-6 justify-center items-center my-auto min-h-[72px] w-[72px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4183fa703915beeba0f58631dd8f7f40605fc37e4ec8b2e5ab69ff6f96159ba9?placeholderIfAbsent=true&apiKey=6dbaaf0a66ca4d72973daca081ce92d0" className="object-contain self-stretch my-auto w-9 aspect-square" alt="Customer action icon" />
      </div>
    </div>
  );
};

export default CustomerItem;