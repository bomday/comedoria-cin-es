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

const getDayOfWeek = (dateString: string) => {
  const date = new Date(dateString)
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  return days[date.getDay()]
}

const getShift = (dateString: string) => {
  const date = new Date(dateString)
  const hours = date.getHours()
  const minutes = date.getMinutes()

  if (hours >= 6 && (hours < 12 || (hours === 12 && minutes === 0))) {
    return 'Manhã'
  } else if (hours >= 12 && (hours < 17 || (hours === 17 && minutes <= 30))) {
    return 'Tarde'
  } else {
    return 'Fora do horário definido'
  }
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

  const groupSalesByDayAndShift = (sales: Sale[]) => {
    const groupedData: Record<string, { date: string, shift: string, totalSales: number }> = {}

    sales.forEach((sale) => {
      const dayOfWeek = getDayOfWeek(sale.createdAt)
      const shift = getShift(sale.createdAt)
      const date = new Date(sale.createdAt).toLocaleDateString('pt-BR')
      
      const key = `${dayOfWeek}-${shift}-${date}`

      const totalSales = sale.order.reduce((total, item) => total + item.quantity_products, 0)

      if (!groupedData[key]) {
        groupedData[key] = { date, shift, totalSales }
      } else {
        groupedData[key].totalSales += totalSales
      }
    })

    return Object.values(groupedData)
  }

  useEffect(() => {
    fetchSalesData()
  }, [])

  const filteredSales = filterSalesByCurrentWeek(sales)
  const groupedSales = groupSalesByDayAndShift(filteredSales)

  if (loading) return <div>...</div>
  if (error) return <div>Erro: {error}</div>

  return (
    <div>
        {groupedSales.length === 0 ? (
          <p>Nenhuma venda encontrada para a semana atual.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Dia</TableHead>
                <TableHead>Turno</TableHead>
                <TableHead>Data</TableHead>
                <TableHead className="text-right">Salgados Vendidos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {groupedSales.map((sale, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{getDayOfWeek(sale.date)}</TableCell>
                  <TableCell>{sale.shift}</TableCell>
                  <TableCell>{sale.date}</TableCell>
                  <TableCell className="text-right">{sale.totalSales}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        </div>
  )
}