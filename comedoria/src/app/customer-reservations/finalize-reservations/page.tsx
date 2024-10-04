"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Image as ImageIcon } from 'lucide-react'
import NavbarLogged from '@/components/ui/Navbar-logged'
import Footer from '@/components/ui/footer'
import PriceBanner from '@/components/ui/price-banner'
import { useSearchParams } from 'next/navigation'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  type: string
  flavor: string
}

export default function FinalizeReservation() {
  const searchParams = useSearchParams()
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    if (searchParams) {
      const cartParam = searchParams.get('cart')
      if (cartParam) {
        try {
          const decodedCart = JSON.parse(decodeURIComponent(cartParam))
          setCartItems(decodedCart)
        } catch (error) {
          console.error('Error parsing cart data:', error)
        }
      }
    }
  }, [searchParams])

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const handleReservation = () => {
    // Implement reservation logic here
    console.log("Reservation made")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarLogged />
      <PriceBanner />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-[#45480F] mb-8">Finalize sua reserva</h2>
        {cartItems.length > 0 ? (
          <div className="flex flex-col w-[640px] mx-auto">
            <div className="space-y-4 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="w-[640px] h-[96px] flex items-center bg-[#FFFFFF] rounded-lg border border-[#E5E7EB]">
                  <div className="w-[96px] h-[96px] bg-[#FFF9E5] rounded-l-lg flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-[#FFD700]" />
                  </div>
                  <div className="flex-grow px-4">
                    <p className="font-medium text-lg">{item.name}</p>
                  </div>
                  <div className="w-[120px] text-right pr-6">
                    <p className="text-2xl font-bold">{item.quantity}</p>
                    <p className="text-sm text-gray-500">{item.quantity === 1 ? 'unidade' : 'unidades'}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-xl font-bold">Total a pagar:</p>
              <span className="text-4xl font-bold">R$ {calculateTotal().toFixed(2)}</span>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4 mb-6">Seu pedido ficará reservado até as 17:00</p>
            <Button
              className="w-full h-14 bg-[#9B4701] hover:bg-[#A0522D] text-white text-lg font-semibold rounded-lg"
              onClick={handleReservation}
            >
              Fazer Reserva
            </Button>
          </div>
        ) : (
          <p className="text-center text-gray-600">Seu carrinho está vazio.</p>
        )}
      </main>
      <Footer />
    </div>
  )
}