"use client"

import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Order {
  product_name: string
  quantity_products: number
}

interface Sale {
  seller: string
  order: Order[]
  reservation_id: string
  discount: boolean
  payment: string
  createdAt: string
}

const getLastWeekRange = () => {
  const now = new Date()
  const dayOfWeek = now.getDay()
  const differenceToMonday = (dayOfWeek === 0 ? 7 : dayOfWeek) - 1
  
  // Determinar a segunda-feira da semana atual
  const mondayCurrentWeek = new Date(now.setDate(now.getDate() - differenceToMonday));
  const mondayLastWeek = new Date(mondayCurrentWeek);
  mondayLastWeek.setDate(mondayCurrentWeek.getDate() - 7);
  
  const fridayLastWeek = new Date(mondayLastWeek);
  fridayLastWeek.setDate(mondayLastWeek.getDate() + 4);
  
  mondayLastWeek.setHours(0, 0, 0, 0);
  fridayLastWeek.setHours(23, 59, 59, 999);

  return { monday: mondayLastWeek, friday: fridayLastWeek };
}

interface SalesModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SalesModal({ isOpen, onClose }: SalesModalProps) {
  const [sales, setSales] = useState<Sale[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchSalesData = async () => {
    try {
      const response = await fetch('/api/sale')
      if (!response.ok) {
        throw new Error('Erro ao buscar as vendas')
      }

      const data: Sale[] = await response.json()
      setSales(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const filterSalesByLastWeek = (sales: Sale[]) => {
    const { monday, friday } = getLastWeekRange()
    return sales.filter((sale) => {
      const saleDate = new Date(sale.createdAt)
      return saleDate >= monday && saleDate <= friday
    })
  }

  const groupSalesByDayAndProduct = (sales: Sale[]) => {
    const groupedData: Record<string, { product_name: string, date: string, totalSold: number }> = {}

    sales.forEach((sale) => {
      const date = new Date(sale.createdAt).toLocaleDateString('pt-BR')
      
      sale.order.forEach((item) => {
        const key = `${item.product_name}-${date}`

        if (!groupedData[key]) {
          groupedData[key] = { product_name: item.product_name, date, totalSold: item.quantity_products }
        } else {
          groupedData[key].totalSold += item.quantity_products
        }
      })
    })

    return Object.values(groupedData)
  }

  useEffect(() => {
    if (isOpen) {
      fetchSalesData()
    }
  }, [isOpen])

  const filteredSales = filterSalesByLastWeek(sales)
  const groupedSales = groupSalesByDayAndProduct(filteredSales)

  if (loading) return <div></div>
  if (error) return <div>Erro: {error}</div>

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Vendas da Semana Anterior</DialogTitle>
        </DialogHeader>
        <div>
          {groupedSales.length === 0 ? (
            <p>Nenhuma venda encontrada para a semana anterior.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Produto</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead className="text-right">Quantidade Vendida</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {groupedSales.map((sale, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{sale.product_name}</TableCell>
                    <TableCell>{sale.date}</TableCell>
                    <TableCell className="text-right">{sale.totalSold}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
