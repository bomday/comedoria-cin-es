"use client"

import SalesChart from './sales-chart/sales-chart';
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SquarePen, SquarePlus, FileDown, BarChart2 } from 'lucide-react'
import Navbar from '@/components/ui/Navbar-manager'
import Footer from '@/components/ui/footer'
import Sidebar from '@/components/ui/sidebar'
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
  
  const handleExportPDF = () => { // função para incluir exportação PDF
    console.log('Exporting as PDF') 
  }
  
  const handleExportCSV = () => { // função para incluir exportação CSV
    console.log('Exporting as CSV')
  }

  const [view, setView] = useState<'chart' | 'list'>('chart')

  const [isModalOpen1, setIsModalOpen1] = useState(false)
  const handleOpenModal1 = () => {setIsModalOpen1(true)}
  const handleCloseModal1 = () => {setIsModalOpen1(false)}

  const [isModalOpen2, setIsModalOpen2] = useState(false)
  const handleOpenModal2 = () => {setIsModalOpen2(true)}
  const handleCloseModal2 = () => {setIsModalOpen2(false)}

  const [isModalOpen3, setIsModalOpen3] = useState(false)
  const handleOpenModal3 = () => {setIsModalOpen3(true)}
  const handleCloseModal3 = () => {setIsModalOpen3(false)}

  const [isModalOpen4, setIsModalOpen4] = useState(false)
  const handleOpenModal4 = () => {setIsModalOpen4(true)}
  const handleCloseModal4 = () => {setIsModalOpen4(false)}

  const [isModalOpen5, setIsModalOpen5] = useState(false)
  const handleOpenModal5 = () => {setIsModalOpen5(true)}
  const handleCloseModal5 = () => {setIsModalOpen5(false)}

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen bg-gray-100 mt-8">
      <h1 className="text-[52px] font-bold p-4 pb-2 text-[#556B2F]">Gerenciamento</h1>
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center">
                <CardTitle className="text-sm font-medium">Salgados Vendidos</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-xs text-muted-foreground">
                  Quantidade de vendas na última semana
                </p>
                <TotalSales />
              </CardContent>
              <div className="ml-auto flex flex-col items-center mb-4 mr-4">
                <Button onClick={handleOpenModal1} variant="ghost" size="icon" className="h-8 w-8">
                  <SquarePlus className="h-5 w-5" />
                </Button>
                <span className="text-xs mt-1">Ver mais</span>
              </div>
              <AlertTable
                isOpen={isModalOpen1}
                onClose={handleCloseModal1}
              /> 
            </Card>
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm font-medium">Reservas Finalizadas</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-xs text-muted-foreground">
                  Porcentagem de reservas vendidas
                </p>
                <div className="text-2xl font-bold">87%</div>
              </CardContent>
              <div className="ml-auto flex flex-col items-center mb-4 mr-4">
                <Button onClick={handleOpenModal2} variant="ghost" size="icon" className="h-8 w-8">
                  <SquarePlus className="h-5 w-5" />
                </Button>
                <span className="text-xs mt-1">Ver mais</span>
              </div>
              <AlertTableReserve
                isOpen={isModalOpen2}
                onClose={handleCloseModal2}
              /> 
            </Card>
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm font-medium">Salgado Mais Vendido</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-xs text-muted-foreground">
                  Salgado favorito do público na semana
                </p>
                <div className="flex flex-row items-start justify-start">
                  <MostSale />
                </div>
              </CardContent>
              <div className="ml-auto flex flex-col items-center mb-4 mr-4">
                <Button onClick={handleOpenModal3} variant="ghost" size="icon" className="h-8 w-8">
                  <SquarePlus className="h-5 w-5" />
                </Button>
                <span className="text-xs mt-1">Ver mais</span>
              </div>
              {/* <AlertTableMostSale
                isOpen={isModalOpen3}
                onClose={handleCloseModal3}
              /> */}
            </Card>
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm font-medium">Trabalhando Agora</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-xs text-muted-foreground">
                  Funcionário trabalhando no turno atual
                </p>
                <div className="text-2xl font-bold">Maria</div>
              </CardContent>
              <div className="ml-auto flex flex-col items-center mb-4 mr-4">
                <Button onClick={handleOpenModal4} variant="ghost" size="icon" className="h-8 w-8">
                  <SquarePen className="h-5 w-5" />
                </Button>
                <span className="text-xs mt-1">Ver mais</span>
              </div>
              <AlertAtribution
                isOpen={isModalOpen4}
                onClose={handleCloseModal4}
              />
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 items-center mt-4">
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm font-medium">Receita</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-xs text-muted-foreground">
                  Valor total arrecadado na semana
                </p>
                <Receita />
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm font-medium">Custos</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-xs text-muted-foreground">
                  Valor total relativo à reposição de salgados
                </p>
                <Custo />
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm font-medium">Lucros</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-xs text-muted-foreground">
                  Receita menos custos na semana
                </p>
                <Lucro />
              </CardContent>
            </Card>
            <div className="flex flex-col justify-center gap-y-[16px] mt-4">
              <div>
                <Button onClick={handleOpenModal5} variant="outline" className="w-full">
                  <span className="text-center mr-2 h-4 w-4" />Gerar Sugestão de Estoque
                </Button>
                <AlertTableInventory
                  isOpen={isModalOpen5}
                  onClose={handleCloseModal5}
                />
              </div>
              <div>
                <Button onClick={() => setIsModalOpen6(true)} variant="outline" className="w-full">
                  <span className="text-center mr-2 h-4 w-4" /> Exportar Estatísticas
                </Button>
                <ExportDialog
                  isOpen={isModalOpen6}
                  onClose={() => setIsModalOpen6(false)}
                  onExportPDF={handleExportPDF}
                  onExportCSV={handleExportCSV}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start justify-between mt-4 mb-4">
            <Card className="w-full lg:w-2/3 mb-4 lg:mb-0 lg:mr-4">
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
                {view === 'chart' ? (
                  <SalesChart />
                ) : (
                  <WeeklyViewList  />
                )}
              </CardContent>
            </Card>
            <div className="w-full lg:w-1/3 space-y-4">
              <h2 className="text-4xl font-semibold text-[#000000]">Últimas reservas</h2>
              <p className="item-start">Reservas no último turno</p>
              <div className="space-y-2">
                {historyItems.map((item) => (
                  <div 
                    key={item.id} 
                    className={`p-3 rounded-lg flex justify-between items-center ${
                      item.status === 'highlighted' ? 'bg-[#FFFFFF] border border-[#9B470180]' : 'bg-white border border-[#9B470180]'
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
        </main>
      </div>
      <Footer />
    </div>
    </>
  )
}