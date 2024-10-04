"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ArrowLeft, Search, Plus, Minus, Image as ImageIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert } from "@/components/ui/alert"
import NavbarStaff from '@/components/ui/Navbar-staff'
import Footer from '@/components/ui/footer'

interface Product {
  id: number
  name: string
  type: string
  flavors: string
  quantity: number
}

export default function InventoryReposition() {

    const router = useRouter()

  const [products] = useState<Product[]>([
    { id: 1, name: 'Esfiha de Frango e Cheddar', type: 'Esfiha', flavors: 'Frango e Cheddar', quantity: 0 },
    { id: 2, name: 'Esfiha de Frango e Catupiry', type: 'Esfiha', flavors: 'Frango e Catupiry', quantity: 0 },
    { id: 3, name: 'Esfiha de Frango e Calabresa', type: 'Esfiha', flavors: 'Frango e Calabresa', quantity: 0 },
    { id: 4, name: 'Esfiha de Queijo', type: 'Esfiha', flavors: 'Queijo', quantity: 0 },
    { id: 5, name: 'Esfiha de Frango e Cheddar', type: 'Esfiha', flavors: 'Frango e Cheddar', quantity: 0 },
    { id: 6, name: 'Esfiha de Frango e Catupiry', type: 'Esfiha', flavors: 'Frango e Catupiry', quantity: 0 },
    { id: 7, name: 'Esfiha de Frango e Calabresa', type: 'Esfiha', flavors: 'Frango e Calabresa', quantity: 0 },
    { id: 8, name: 'Esfiha de Queijo', type: 'Esfiha', flavors: 'Queijo', quantity: 0 }
  ])

  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const handleProductSelect = (product: Product) => {
    const isSelected = selectedProducts.some(p => p.id === product.id)
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id))
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }])
    }
  }

  const handleQuantityChange = (id: number, change: number) => {
    setSelectedProducts(prevProducts => 
      prevProducts.reduce((acc, product) => {
        if (product.id === id) {
          const newQuantity = Math.max(0, product.quantity + change)
          if (newQuantity === 0) {
            return acc
          }
          return [...acc, { ...product, quantity: newQuantity }]
        }
        return [...acc, product]
      }, [] as Product[])
    )
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleReposition = () => {
    setShowAlert(true)

    setTimeout(() => {
        setShowAlert(false),
        router.push('/staff-products')}, 3000)
  }

  return (
    <>
    <NavbarStaff />
    <div className="container mx-auto max-w-auto flex flex-col items-center justify-center px-4">
      <div className="flex justify-between items-center mt-4 mb-4 w-full max-w-7xl">
        <h1 className="text-3xl font-bold text-[#8B4513]">Repor Estoque</h1>
        <Button onClick={() => router.push('/staff-products')} variant="ghost" className="text-[#000000]">
          <ArrowLeft className="mr-2 h-8 w-8" />
        </Button>
      </div>
      
      <div className="flex justify-between flex-col md:flex-row md:space-x-4 w-full max-w-7xl">
        <div className="w-full md:w-2/3">
          <div className="relative flex justify-between mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Buscar" 
              className="pl-10 w-full" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {filteredProducts.map(product => (
            <div key={product.id} className="flex items-center mb-4 bg-[#FFFFFF] border-[0.29px] border-[#9B470180] rounded-lg">
              <div className="w-[10%] h-[80px] bg-[#F9F9DF] rounded-lg flex items-center justify-center mr-4">
                <ImageIcon className="w-10 h-10 text-[#FFA500]"/>
              </div>
              <div className="flex-grow">
                <h2 className="font-bold">{product.name}</h2>
                <div className="flex items-center justify-start text-sm text-gray-600">
                  <p className="mr-4">Tipo: {product.type}</p>
                  <p>Sabores: {product.flavors}</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="icon"
                className="h-[57.61px] w-[57.61px] bg-[#AED970] hover:bg-[#98C256] text-[#FFFFFF] mr-4 rounded-lg"
                onClick={() => handleProductSelect(product)}>
                <Plus className="h-8 w-8" />
              </Button>
            </div>
          ))}
        </div>

        <div className="w-full md:w-[419px]">
          {selectedProducts.map(product => (
            <div key={product.id} className="mb-4 bg-[#FFFFFF] border-[0.29px] border-[#9B470180] rounded-lg">
              <div className="flex items-center">
                <div className="w-[15%] h-[72px] bg-[#F9F9DF] rounded-lg flex items-center justify-center mr-4">
                  <ImageIcon className="w-8 h-8 text-[#FFA500]"/>
                </div>
                <div>
                  <h2 className="font-bold">{product.name}</h2>
                  <p className="text-xs text-gray-600">Details</p>
                </div>
                <div className="flex items-center ml-auto">
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="h-8 w-8 bg-[#F9F9DF] hover:bg-[#E0E0B0] border-[#8B4513]" 
                    onClick={() => handleQuantityChange(product.id, -1)}
                  >
                    <Minus className="h-4 w-4 text-[#8B4513]" />
                  </Button>
                  <span className="w-6 text-center font-bold">{product.quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="h-8 w-8 bg-[#F9F9DF] hover:bg-[#E0E0B0] border-[#8B4513]"
                    onClick={() => handleQuantityChange(product.id, 1)}
                  >
                    <Plus className="h-4 w-4 text-[#8B4513]" />
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {selectedProducts.length === 0 && (
            <div className="flex justify-center">
              <p className="text-center text-gray-500">Nenhum produto selecionado</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end w-full max-w-7xl">      
        <Button onClick={() => {handleReposition(); router.push('/staff-products')}} className="w-full md:w-[419px] mt-4 mb-4 bg-[#8B4513] text-[#FFFFFF] hover:bg-[#A0522D]">
          Repor Estoque
        </Button>
      </div>
      <Alert
        message="Sua reposição foi efetuada com sucesso!"
        isVisible={showAlert}
        onClose={() => setShowAlert(false)}
      />
    </div>
    <Footer />
    </>
  )
}