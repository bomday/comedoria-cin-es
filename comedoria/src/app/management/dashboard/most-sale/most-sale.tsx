"use client"

import React, { useEffect, useState } from 'react'
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

const getCurrentWeekRange = () => {
  const now = new Date()
  const dayOfWeek = now.getDay()
  const differenceToMonday = (dayOfWeek === 0 ? 7 : dayOfWeek) - 1
  const monday = new Date(now.setDate(now.getDate() - differenceToMonday))
  const friday = new Date(monday)
  friday.setDate(monday.getDate() + 4)
  
  monday.setHours(0, 0, 0, 0)
  friday.setHours(23, 59, 59, 999)

  return { monday, friday }
}

export default function SalesTable() {
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

  const filterSalesByCurrentWeek = (sales: Sale[]) => {
    const { monday, friday } = getCurrentWeekRange()
    return sales.filter((sale) => {
      const saleDate = new Date(sale.createdAt)
      return saleDate >= monday && saleDate <= friday
    })
  }

  const groupSalesByProduct = (sales: Sale[]) => {
    const groupedData: Record<string, number> = {}

    sales.forEach((sale) => {
      sale.order.forEach((item) => {
        if (!groupedData[item.product_name]) {
          groupedData[item.product_name] = 0
        }
        groupedData[item.product_name] += item.quantity_products
      })
    })

    return Object.entries(groupedData).map(([product_name, totalSales]) => ({
      product_name,
      totalSales,
    }))
  }

  useEffect(() => {
    fetchSalesData()
  }, [])

  const filteredSales = filterSalesByCurrentWeek(sales)
  const groupedSales = groupSalesByProduct(filteredSales)

  if (loading) return <div>...</div>
  if (error) return <div>Erro: {error}</div>

  return (
    <div>
      {groupedSales.length === 0 ? (
        <p>Nenhuma venda encontrada para a semana atual.</p>
      ) : (
        <Table>
          <TableBody>
            {groupedSales.map((sale, index) => (
              <TableRow key={index}>
                <TableCell className="font-inter text-left">{sale.product_name}</TableCell>
                <TableCell className="text-right font-inter"><b>{sale.totalSales}</b></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
