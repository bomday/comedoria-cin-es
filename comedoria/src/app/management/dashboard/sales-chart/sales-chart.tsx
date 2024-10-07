"use client"

import React, { useEffect, useState } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

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
  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
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

export default function SalesChart() {
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
    const groupedData: Record<string, { day: string, Manhã: number, Tarde: number, 'Fora do horário definido': number }> = {}

    sales.forEach((sale) => {
      const dayOfWeek = getDayOfWeek(sale.createdAt)
      const shift = getShift(sale.createdAt)
      
      if (!groupedData[dayOfWeek]) {
        groupedData[dayOfWeek] = { day: dayOfWeek, Manhã: 0, Tarde: 0, 'Fora do horário definido': 0 }
      }

      const totalSales = sale.order.reduce((total, item) => total + item.quantity_products, 0)
      groupedData[dayOfWeek][shift as 'Manhã' | 'Tarde' | 'Fora do horário definido'] += totalSales
    })

    return Object.values(groupedData)
  }

  useEffect(() => {
    fetchSalesData()
  }, [])

  const filteredSales = filterSalesByCurrentWeek(sales)
  const groupedSales = groupSalesByDayAndShift(filteredSales)

  if (loading) return <div>Carregando...</div>
  if (error) return <div>Erro: {error}</div>

  return (
        <ChartContainer
          config={{
            Manhã: {
              label: "Manhã",
              color: "hsl(45, 100%, 70%)",
            },
            Tarde: {
              label: "Tarde",
              color: "hsl(25, 100%, 40%)",
            },
            'Fora do horário definido': {
              label: "Fora do horário definido",
              color: "hsla(63, 66%, 17%, 1)",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={groupedSales}>
              <XAxis dataKey="day" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="Manhã" fill="var(--color-Manhã)" />
              <Bar dataKey="Tarde" fill="var(--color-Tarde)" />
              <Bar dataKey="Fora do horário definido" fill="var(--color-Fora-do-horário-definido)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
  )
}
