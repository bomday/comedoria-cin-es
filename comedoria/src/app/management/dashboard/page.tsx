"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SquarePen, SquarePlus, FileDown, BarChart2 } from 'lucide-react'
import Navbar from '@/components/ui/Navbar-manager'
import Footer from '@/components/ui/footer'
import Sidebar from '@/components/ui/sidebar'
import SalesChart from './sales-chart/sales-chart'
import WeeklyViewList from "./weekly-view-list/weekly-view-list"
import AlertTable from '@/components/ui/alert-table'
import AlertTableReserve from '@/components/ui/alert-table-reserve'
import AlertTableMostSale from '@/components/ui/alert-table-mostSale'
import AlertTableInventory from '@/components/ui/alert-table-inventory'
import AlertAtribution from '@/components/ui/alert-atribution'
import ExportDialog from '@/components/ui/export-dialog'
import TotalSales from '@/components/ui/total-sales'
import Receita from './receita/receita'
import Custo from './custo/custo'
import Lucro from './lucro/lucro'
import MostSale from './most-sale/most-sale'

const historyItems = [
  { id: 1, items: 'item 1 + item 2 + item 3', price: 12.00, status: 'highlighted', date: '2024-09-25' },
  { id: 2, items: 'item 1 + item 2 + item 3', price: 8.50, status: 'normal', date: '2024-09-24' },
  { id: 3, items: 'item 1 + item 2 + item 3', price: 10.00, status: 'normal', date: '2024-09-23' },
  { id: 4, items: 'item 1 + item 2 + item 3', price: 6.00, status: 'highlighted', date: '2024-09-22' },
  { id: 5, items: 'item 1 + item 2 + item 3', price: 10.00, status: 'normal', date: '2024-09-23' },
  { id: 6, items: 'item 1 + item 2 + item 3', price: 6.00, status: 'highlighted', date: '2024-09-22' },
]

export default function ManagementDashboard() {
  const [isModalOpen6, setIsModalOpen6] = useState(false)
  const [view, setView] = useState<'chart' | 'list'>('chart')
  const [isModalOpen1, setIsModalOpen1] = useState(false)
  const [isModalOpen2, setIsModalOpen2] = useState(false)
  const [isModalOpen3, setIsModalOpen3] = useState(false)
  const [isModalOpen4, setIsModalOpen4] = useState(false)
  const [isModalOpen5, setIsModalOpen5] = useState(false)

  const handleExportPDF = () => {
    console.log('Exporting as PDF')
  }
  
  const handleExportCSV = () => {
    console.log('Exporting as CSV')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 pt-16">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 bg-gray-100">
          <h1 className="text-3xl lg:text-[52px] font-bold mb-6 text-[#556B2F]">Gerenciamento</h1>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium">Salgados Vendidos</CardTitle>
                <Button onClick={() => setIsModalOpen1(true)} variant="ghost" size="icon" className="h-8 w-8">
                  <SquarePlus className="h-5 w-5" />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Quantidade de vendas na última semana</p>
                <TotalSales />
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium">Reservas Finalizadas</CardTitle>
                <Button onClick={() => setIsModalOpen2(true)} variant="ghost" size="icon" className="h-8 w-8">
                  <SquarePlus className="h-5 w-5" />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Porcentagem de reservas vendidas</p>
                <div className="text-2xl font-bold">87%</div>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium">Salgado Mais Vendido</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Salgado favorito do público na semana</p>
                <MostSale />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 items-center mt-4">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Receita</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Valor total arrecadado na semana</p>
                <Receita />
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Custos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Valor total relativo à reposição de salgados</p>
                <Custo />
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Lucros</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Receita menos custos na semana</p>
                <Lucro />
              </CardContent>
            </Card>

            <div className="flex flex-col justify-center gap-4">
              <Button onClick={() => setIsModalOpen5(true)} variant="outline" className="w-full">
                Gerar Sugestão de Estoque
              </Button>
              <Button onClick={() => setIsModalOpen6(true)} variant="outline" className="w-full">
                Exportar Estatísticas
              </Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mt-4">
            <Card className="w-full lg:w-2/3">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-bold">Visão Semanal</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="text-orange-600">
                    <FileDown className="h-4 w-4 mr-2" />
                    Gerar PDF
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-green-700"
                    onClick={() => setView(view === 'chart' ? 'list' : 'chart')}
                  >
                    <BarChart2 className="h-4 w-4 mr-2" />
                    {view === 'chart' ? 'Ver lista' : 'Ver gráfico'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {view === 'chart' ? <SalesChart /> : <WeeklyViewList />}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      <Footer />

      <AlertTable isOpen={isModalOpen1} onClose={() => setIsModalOpen1(false)} />
      <AlertTableReserve isOpen={isModalOpen2} onClose={() => setIsModalOpen2(false)} />
      <AlertAtribution isOpen={isModalOpen4} onClose={() => setIsModalOpen4(false)} />
      <AlertTableInventory isOpen={isModalOpen5} onClose={() => setIsModalOpen5(false)} />
      <ExportDialog
        isOpen={isModalOpen6}
        onClose={() => setIsModalOpen6(false)}
        onExportPDF={handleExportPDF}
        onExportCSV={handleExportCSV}
      />
    </div>
  )
}