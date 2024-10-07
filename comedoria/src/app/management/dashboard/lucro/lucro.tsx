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
  payment: string; // Presumindo que esta propriedade contém o valor arrecadado
  createdAt: string;
}

const getCurrentWeekRange = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const differenceToMonday = (dayOfWeek === 0 ? 7 : dayOfWeek) - 1;

  // Determinar a segunda-feira da semana atual
  const monday = new Date(now.setDate(now.getDate() - differenceToMonday));
  const friday = new Date(monday);
  friday.setDate(monday.getDate() + 4);

  monday.setHours(0, 0, 0, 0);
  friday.setHours(23, 59, 59, 999);

  return { monday, friday };
};

export default function SalesTable() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);

  const fetchSalesData = async () => {
    try {
      const response = await fetch('/api/sale');
      if (!response.ok) {
        throw new Error('Erro ao buscar as vendas');
      }

      const data: Sale[] = await response.json();
      setSales(data);
      calculateFinancials(data); // Calcular receita e custo ao buscar os dados
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filterSalesByCurrentWeek = (sales: Sale[]) => {
    const { monday, friday } = getCurrentWeekRange();
    return sales.filter((sale) => {
      const saleDate = new Date(sale.createdAt);
      return saleDate >= monday && saleDate <= friday;
    });
  };

  const calculateFinancials = (sales: Sale[]) => {
    const currentWeekSales = filterSalesByCurrentWeek(sales);
    const { totalRevenue, totalCost } = currentWeekSales.reduce((acc, sale) => {
      const { revenue, cost } = sale.order.reduce((innerAcc, item) => {
        const itemRevenue = item.quantity_products * 2.5; // Preço de venda por salgado
        const itemCost = item.quantity_products * 1.0; // Custo por salgado

        innerAcc.revenue += itemRevenue;
        innerAcc.cost += itemCost;

        return innerAcc;
      }, { revenue: 0, cost: 0 });

      acc.totalRevenue += revenue;
      acc.totalCost += cost;

      return acc;
    }, { totalRevenue: 0, totalCost: 0 });

    setTotalRevenue(totalRevenue);
    setTotalCost(totalCost);
    setProfit(totalRevenue - totalCost); // Calcula o lucro
  };

  useEffect(() => {
    fetchSalesData();
  }, []);

  if (loading) return <div>...</div>;
  if (error) return <div>Erro: {error}</div>;

  // Formatação dos valores
  const formattedRevenue = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalRevenue);

  const formattedCost = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalCost);

  const formattedProfit = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(profit);

  return (
    <div>
      <h3 className="font-inter text-4xl"><b>R$ {formattedProfit}</b></h3>
    </div>
  );
}
