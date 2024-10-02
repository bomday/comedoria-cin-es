"use client"

import { useState } from 'react';
import { Trash2, Image as ImageIcon } from 'lucide-react';

interface Reservation {
  id: string;
  items: string;
  date: string;
  price: number;
  currency: string;
}

interface HistoryItem {
  id: string;
  items: string;
  price: number;
  date: string;
  status: 'normal' | 'highlighted';
}

const initialActiveReservations: Reservation[] = [
  { id: '1', items: 'Item 1 + Item 2 + Item 3', date: '14/01/2024', price: 15.00, currency: '€' },
  { id: '2', items: 'Item 1 + Item 2 + Item 3', date: '14/01/2024', price: 15.00, currency: '€' },
  { id: '3', items: '', date: '', price: 0, currency: '€' },
];

const historyItems: HistoryItem[] = [
  { id: '1', items: 'Item 1 + Item 2 + Item 3', price: 14.00, date: '14/02/2024', status: 'normal' },
  { id: '2', items: 'Item 1 + Item 2', price: 14.00, date: '14/02/2024', status: 'highlighted' },
  { id: '3', items: 'Item 1', price: 14.00, date: '14/02/2024', status: 'normal' },
  { id: '4', items: 'Item 1 + Item 2 + Item 3 + Item 4', price: 14.00, date: '14/02/2024', status: 'normal' },
  { id: '5', items: 'Product amaaaaaaaaaaaaa.', price: 14.00, date: '14/02/2024', status: 'normal' },
  { id: '6', items: 'Product name', price: 14.00, date: '14/02/2024', status: 'highlighted' },
  { id: '7', items: 'Product amaaaaaaaaaaaaaa', price: 14.00, date: '14/02/2024', status: 'normal' },
  { id: '8', items: 'Product amaaaaaaaaaaa', price: 14.00, date: '14/02/2024', status: 'normal' },
];

export default function ReserveView() {
  const [activeReservations, setActiveReservations] = useState<Reservation[]>(initialActiveReservations);

  const handleDelete = (id: string) => {
    setActiveReservations(activeReservations.filter(reservation => reservation.id !== id));
  };

  return (
    <div className="container relative mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-[#45480F] mb-6">Minhas Reservas</h1>
      
      <div className="flex flex-col justify-center md:flex-row gap-8">
        <div className="absolute left-[164.59px] ritght-[910.78px] w-[262.2px] h-[272px]">
          <h2 className="text-4xl font-semibold mb-4 text-[#000000]">Ativas</h2>
          <div className="space-y-4">
            {activeReservations.map((reservation) => (
              <div key={reservation.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#E2F2CB] h-32 relative">
                  <ImageIcon className="text-[#45480F] w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  <button
                    className="absolute top-4 right-4 text-[#9AB89A]"
                    onClick={() => handleDelete(reservation.id)}
                  >
                    <Trash2 className="text-[#45480F] hover:text-[#606A0F] w-8 h-8" />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-2">{reservation.items}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold text-[#4A6741]">{reservation.date}</p>
                    <p className="text-lg font-bold text-[#4A6741]">{reservation.currency} {reservation.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute left-[426.22px] right-[94.59px] ml-[37px] w-full md:w-2/3">
          <h2 className="text-4xl font-semibold mb-4 text-[#000000]">Histórico</h2>
          <div className="space-y-2">
            {historyItems.map((item) => (
              <div 
                key={item.id} 
                className={`p-3 rounded-lg flex justify-between items-center ${
                  item.status === 'highlighted' ? 'bg-[#FF9B9B]' : 'bg-white border border[#9B470180]'
                }`}
              >
                <div className="flex justify-start items-center flex-grow">
                  <p className="text-sm font-medium text-[#000000] mr-4">{item.items}</p>
                  <p className="text-xs text-gray-500">R$ {item.price.toFixed(2)}</p>
                </div>
                <p className="text-xs text-gray-500 ml-4">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}