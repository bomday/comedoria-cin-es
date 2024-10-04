"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Image as ImageIcon } from 'lucide-react'
import NavbarLogged from '@/components/ui/Navbar-logged'
import Footer from '@/components/ui/footer'
import PriceBanner from '@/components/ui/price-banner'
import { Alert } from "@/components/ui/alert"
import "../../globals.css"

interface FoodItem {
  id: number
  name: string
  quantity: number
  price: number
}

export default function FinalizeReservation() {
  const [items, setItems] = useState<FoodItem[]>([
    { id: 1, name: 'Esfiha de queijo', quantity: 1, price: 4 },
    { id: 2, name: 'Pastel de queijo', quantity: 2, price: 4 },
    { id: 3, name: 'Esfiha de frango com catupiry', quantity: 1, price: 4 },
    { id: 4, name: 'Coxinha de frango', quantity: 2, price: 4 }
  ])
  
  const [showOverlay, setShowOverlay] = useState(false)

  const updateQuantity = (id: number, increment: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + increment) } : item
    ))
  }

  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0)

  const handleReservation = () => {
    setShowOverlay(true)
    setTimeout(() => setShowOverlay(false), 2000) // Alerta será fechado após 2 segundos
  }

  return (
    <>
      <NavbarLogged />
      <PriceBanner />
      <div className="relative h-[calc(100vh-64px)] mt-2 flex flex-col items-center">
        <div className="w-[532px] h-[64px] absolute left-[70px]">
          <h2 className="text-4xl font-bold text-[#45480F]">Finalize sua reserva</h2>
        </div>
        <div className="flex flex-col w-[640px] h-[432px] absolute top-[112px] gap-[16px] items-center justify-center">
          {items.map(item => (
            <div key={item.id} className="w-[640px] h-[96px] flex border-2 border-[#9B470180] bg-[#FFFFFF] rounded-lg">
              <div className="w-[15%] h-14 bg-[#F9F9DF] rounded-lg flex items-center justify-center mr-3">
                <ImageIcon className="w-10 h-10 text-[#FFA500]" />
              </div>
              <div className="flex-grow">
                <p className="font-medium">{item.name}</p>
              </div>
              <div className="flex items-center space-x-2 mr-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 text-[#9B4701] bg-[#F9F9DF] hover:bg-[#E0E0B0]"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-6 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 text-[#9B4701] bg-[#F9F9DF] hover:bg-[#E0E0B0]"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          <div className="flex items-start justify-end w-full">
            <p className="text-lg font-bold mr-4">Total a pagar:</p>
            <span className="text-4xl">R$ {total.toFixed(2)}</span>
          </div>
          <div>
            <p className="text-center text-sm text-gray-500">Seu pedido ficará reservado até as 17:00</p>
          </div>
          <Button
            className="flex items-center justify-center w-[420px] h-[64px] bg-[#9B4701] hover:bg-[#A0522D] text-[#FFFFFF]"
            onClick={handleReservation}
          >
            Fazer Reserva
          </Button>
        </div>
      </div>
      <Alert
        message="Sua reserva foi efetuada com sucesso!"
        isVisible={showOverlay}
        onClose={() => setShowOverlay(false)}
      />
      <Footer />
    </>
  )
}
