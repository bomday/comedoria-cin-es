"use client"

import React, { useEffect, useState } from 'react';

interface Order {
  product_name: string;
  quantity_products: number;
}

interface Sale {
  seller: string;
  order: Order[];
  reservation_id: string;
  discount: boolean;
  payment: string;
  createdAt: string;
}

const getLastWeekRange = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const differenceToMonday = (dayOfWeek === 0 ? 7 : dayOfWeek) - 1;
  
  // Determinar a segunda-feira da semana atual
  const mondayCurrentWeek = new Date(now.setDate(now.getDate() - differenceToMonday));
  const mondayLastWeek = new Date(mondayCurrentWeek);
  mondayLastWeek.setDate(mondayCurrentWeek.getDate() - 7);
  
  const fridayLastWeek = new Date(mondayLastWeek);
  fridayLastWeek.setDate(mondayLastWeek.getDate() + 4);
  
  mondayLastWeek.setHours(0, 0, 0, 0);
  fridayLastWeek.setHours(23, 59, 59, 999);

  return { monday: mondayLastWeek, friday: fridayLastWeek };
};

export default function SalesTable() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  const fetchSalesData = async () => {
    try {
      const response = await fetch('/api/sale');
      if (!response.ok) {
        throw new Error('Erro ao buscar as vendas');
      }

      const data: Sale[] = await response.json();
      setSales(data);
      calculateTotalQuantity(data); // Calcular a quantidade total ao buscar os dados
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filterSalesByLastWeek = (sales: Sale[]) => {
    const { monday, friday } = getLastWeekRange();
    return sales.filter((sale) => {
      const saleDate = new Date(sale.createdAt);
      return saleDate >= monday && saleDate <= friday;
    });
  };

  const calculateTotalQuantity = (sales: Sale[]) => {
    const lastWeekSales = filterSalesByLastWeek(sales);
    const total = lastWeekSales.reduce((sum, sale) => {
      return sum + sale.order.reduce((total, item) => total + item.quantity_products, 0);
    }, 0);
    setTotalQuantity(total);
  };

  useEffect(() => {
    fetchSalesData();
  }, []);

  if (loading) return <div>...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <h1 className="font-inter text-4x1"><b>{totalQuantity}</b></h1>
    </div>
  );
}
