"use client"; 
import React, { useState, useEffect } from 'react';
import { Check, CircleX } from 'lucide-react';
import "@/app/globals.css"

interface Reservation {
  id: string;
  name: string;
  items: string[];
  price: string;
  timestamp: string;
  status: 'active' | 'completed' | 'cancelled';
}

const fetchReservations = (): Promise<Reservation[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "1", name: "Fulano de ciclano", items: ["Item 1", "Item 2", "Item 3"], price: "R$ 14,00", timestamp: "14:45:02", status: "active" },
        { id: "2", name: "Fulano de ciclano", items: ["Item 1", "Item 2"], price: "R$ 14,00", timestamp: "14:45:02", status: "active" },
        { id: "3", name: "Fulano de ciclano", items: ["Item 1"], price: "R$ 14,00", timestamp: "14:45:02", status: "cancelled" },
        { id: "4", name: "Fulano de ciclano", items: ["Item 1", "Item 2", "Item 3"], price: "R$ 14,00", timestamp: "14:45:02", status: "completed" },
      ]);
    });
  });
}

export default function Component() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  // simular a busca dos dados
  useEffect(() => {
    const loadReservations = async () => {
      const data = await fetchReservations();
      setReservations(data);
    };
    
    loadReservations();
  }, []);

  // Separando as reservas ativas das reservas no histórico
  const activeReservations = reservations.filter(r => r.status === 'active');
  const historicReservations = reservations.filter(r => r.status !== 'active');

  const itemStyle = {
    backgroundColor: 'background',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '10px',
    height: '80px',
  };

  const contentStyle = {
    flex: 1,
    padding: '10px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
  };

  const buttonContainerStyle = {
    display: 'flex',
    height: '100%',
  };

  const buttonStyle = {
    width: '48px',
    height: '100%',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '18px',
  };

  // Função para converter a lista de itens em uma string separada por +
  const formatItems = (items: string[]) => items.join(' + ');

  const handleComplete = (id: string) => {
    setReservations(prevReservations =>
      prevReservations.map(reservation =>
        reservation.id === id ? { ...reservation, status: 'completed' } : reservation
      )
    )
  }

  const handleCancel = (id: string) => {
    setReservations(prevReservations =>
      prevReservations.map(reservation =>
        reservation.id === id ? { ...reservation, status: 'cancelled' } : reservation
      )
    )
  }

  return (
    <section className='mt-2'>
        <div className="flex gap-80 mx-auto justify-start inset-0 p-20 bg-black bg-opacity-40 z-10">
            <div className="bg-black bg-opacity-40 p-8 rounded-lg w-full">
                <h1 className="text-5xl advent-pro-700 text-[#45480F] mb-6">Reservas</h1>
                <div className="flex flex-row w-full justify-between">
                    <h3 className="text-4xl advent-pro-700 text-[#000000] mb-6">Ativas</h3>
                    <h3 className="text-4xl advent-pro-700 text-[#000000] mb-6">Histórico</h3>
                </div>
                <div className="flex flex-row gap-6 justify-between items-center mb-4">
                    <div className="relative w-full">
                        {activeReservations.map(reservation => (
                        <div key={reservation.id} style={itemStyle}>
                        <div style={contentStyle}>
                            <p className='font-inter text-left'><b>{reservation.name}</b></p>
                            <p className='text-sm font-inter text-left'>
                            {formatItems(reservation.items)}
                            <span className='text-sm font-inter text-left ml-4'>{reservation.price}</span>
                            </p>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                        }}>
                            <span className='font-inter text-sm text-top mt-2 mr-2'>{reservation.timestamp}</span>

                            <div style={buttonContainerStyle}>
                            <button onClick={() => handleComplete(reservation.id)} style={{...buttonStyle, backgroundColor: '#AED970'}}>
                                <Check size={24} color="white" />
                            </button>
                            <button onClick={() => handleCancel(reservation.id)} style={{...buttonStyle, backgroundColor: '#FF6B6B'}}>
                                <CircleX size={24} color="white" />
                            </button>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>

                    <div className="relative w-full">
                    <div>
                        {historicReservations.map(reservation => (
                        <div key={reservation.id} style={{
                            ...itemStyle,
                            backgroundColor: reservation.status === 'completed' ? '#C6F6D5' : '#FED7D7',
                        }}>
                            <div className='font-inter text-sm p-4'>
                                <p><b>{reservation.name}</b></p>
                                <p>{formatItems(reservation.items)}
                                    <span className='ml-4'>{reservation.price}</span>
                                </p>
                            </div>
                            <span className='font-inter text-sm text-top mt-2 mr-2'>{reservation.timestamp}</span>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>    
        </div>
    </section>
  );
}