"use client"; 
import React, { useState, useEffect } from 'react';
import { Check, CircleX } from 'lucide-react';
import NavbarStaff from "@/components/ui/Navbar-staff"
import Footer from "@/components/ui/footer"

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
    backgroundColor: 'white',
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

  const nameStyle = {
    fontWeight: 'bold',
    marginBottom: '4px',
  };

  const detailsStyle = {
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#718096',
    marginBottom: '4px',
  };

  const timestampStyle = {
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#a0aec0',
    marginRight: '10px',
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

  const priceStyle = {
    fontSize: '14px',
    marginLeft: '20px',
    color: '#718096',
  };

  // Função para converter a lista de itens em uma string separada por +
  const formatItems = (items: string[]) => items.join(' + ');

  return (
    <>
    <NavbarStaff />
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      minHeight: '100vh'
    }}>
      <h2 style={{
        fontSize: '52px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#4a5568',
      }}>Reservas</h2>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '37px'
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: '40px',
            fontWeight: 'bold',
            marginBottom: '15px'
          }}>Ativas</h3>
          {activeReservations.map(reservation => (
            <div key={reservation.id} style={itemStyle}>
              <div style={contentStyle}>
                <p style={nameStyle}>{reservation.name}</p>
                <p style={detailsStyle}>
                  {formatItems(reservation.items)}
                  <span style={priceStyle}>{reservation.price}</span>
                </p>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
              }}>
                <span style={{
                  ...timestampStyle,
                  marginTop: '10px'
                }}>{reservation.timestamp}</span>

                <div style={buttonContainerStyle}>
                  <button style={{...buttonStyle, backgroundColor: '#AED970'}}>
                    <Check size={24} color="white" />
                  </button>
                  <button style={{...buttonStyle, backgroundColor: '#FF6B6B'}}>
                    <CircleX size={24} color="white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: '40px',
            fontWeight: 'bold',
            marginBottom: '15px'
          }}>Histórico</h3>
          <div>
            {historicReservations.map(reservation => (
              <div key={reservation.id} style={{
                ...itemStyle,
                backgroundColor: reservation.status === 'completed' ? '#C6F6D5' : '#FED7D7',
              }}>
                <div style={contentStyle}>
                  <p style={nameStyle}>{reservation.name}</p>
                  <p style={detailsStyle}>
                    {formatItems(reservation.items)}
                    <span style={priceStyle}>{reservation.price}</span>
                  </p>
                </div>
                <span style={{
                  ...timestampStyle,
                  marginTop: '10px'
                }}>{reservation.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}
