"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Minus, Plus, ArrowLeft, Image as ImageIcon } from 'lucide-react'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/footer'
import { Alert } from "@/components/ui/alert"

interface FoodItem {
  id: number
  name: string
  quantity: number
  price: number
}

export default function FinalizeSales() {
  const [items, setItems] = useState<FoodItem[]>([
    { id: 1, name: 'Esfiha de queijo', quantity: 1, price: 4 },
    { id: 2, name: 'Pastel de queijo', quantity: 2, price: 4 },
    { id: 3, name: 'Esfiha de frango com catupiry', quantity: 1, price: 4 },
    { id: 4, name: 'Coxinha de frango', quantity: 2, price: 4 },
  ])
  const [isEmployeeDiscount, setIsEmployeeDiscount] = useState(false)
  const [paymentType, setPaymentType] = useState("dinheiro")
  const [showAlert, setShowAlert] = useState(false)

  const updateQuantity = (id: number, increment: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + increment) } : item
    ))
  }

  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0)

  const handleFinalizeSale = () => {
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 2000)
  }

  return (
    <>
      <Navbar />
      <div className="mx-[70px] max-w-[calc(100%-140px)] mb-[32px]">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#F2BF5E]">Finalize sua venda</h1>
          <Button variant="ghost" className="text-[#000000]">
            <ArrowLeft className="mr-2 h-8 w-8" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[128px]">
          <div>
            <h2 className="text-2xl font-bold mb-4">Pedido</h2>
            {items.map(item => (
              <div key={item.id} className="flex items-center w-full md:flex-row mb-4 bg-[#FFFFFF] border border-[#FFA50080] rounded-lg pr-2">
                <div className="w-16 h-16 bg-[#FFF5E6] rounded-lg flex items-center justify-center mr-3">
                  <ImageIcon className="w-10 h-10 text-[#FFA500]"/>
                </div>
                <div className="flex-grow">
                  <p className="font-medium flex items-start">{item.name}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 text-[#FFA500] bg-[#FFF5E6] hover:bg-[#FFE0B2]"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 text-[#FFA500] bg-[#FFF5E6] hover:bg-[#FFE0B2]"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            <div className="flex justify-end items-start mt-4">
              <p className="text-lg font-bold mr-2">Total:</p>
              <span className="text-3xl font-bold">R$ {total.toFixed(2)}</span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Pagamento</h2>
            <div className="mb-4">
              <Checkbox 
                id="employee-discount" 
                checked={isEmployeeDiscount}
                onCheckedChange={(checked) => setIsEmployeeDiscount(checked as boolean)}
                className="text-[#45480F] checked:bg-[#45480F] checked:border-transparent"
              />
              <label htmlFor="employee-discount" className="ml-2">
                Desconto para funcionário
              </label>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tipo de Pagamento</h3>
            <RadioGroup value={paymentType} onValueChange={setPaymentType}>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="dinheiro" id="dinheiro" />
                <Label htmlFor="dinheiro">Dinheiro</Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="cartao-credito" id="cartao-credito" />
                <Label htmlFor="cartao-credito">Cartão de Crédito</Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="cartao-debito" id="cartao-debito" />
                <Label htmlFor="cartao-debito">Cartão de Débito</Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="pix" id="pix" />
                <Label htmlFor="pix">Pix</Label>
              </div>
            </RadioGroup>
            <div className="flex justify-end items-start mt-8">
              <p className="text-lg font-bold mb-2 mr-2">Total a receber:</p>
              <p className="text-4xl font-bold">R$ {total.toFixed(2)}</p>
            </div>
            <Button 
              className="flex items-center w-[420px] mt-8 mx-auto bg-[#F2BF5E] hover:bg-[#F0C24D] text-[#FFFFFF]"
              onClick={handleFinalizeSale}
            >
              Finalizar Venda
            </Button>
          </div>
        </div>
      </div>
      <Alert
        message="Sua venda foi efetuada com sucesso!"
        isVisible={showAlert}
        onClose={() => setShowAlert(false)}
      />
      <Footer />
    </>
  )
}