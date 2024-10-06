'use client'

import { useState } from 'react'
import { ArrowLeft, Search, Plus, Minus, Image as ImageIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import ProdutosImage from '../assets/images/produtos.png'
import { useRouter } from 'next/navigation'

interface Product {
  id: number
  name: string
  type: string
  flavors: string
  quantity: number
  price: number
  available: number
}

export default function RealizarVenda() {
  const [products] = useState<Product[]>([
    { id: 1, name: 'Esfiha de Frango e Cheddar', type: 'Esfiha', flavors: 'Frango e Cheddar', quantity: 0, price: 5.50, available: 10 },
    { id: 2, name: 'Esfiha de Frango e Catupiry', type: 'Esfiha', flavors: 'Frango e Catupiry', quantity: 0, price: 5.50, available: 8 },
    { id: 3, name: 'Esfiha de Frango e Calabresa', type: 'Esfiha', flavors: 'Frango e Calabresa', quantity: 0, price: 6.00, available: 5 },
    { id: 4, name: 'Esfiha de Queijo', type: 'Esfiha', flavors: 'Queijo', quantity: 0, price: 5.00, available: 0 },
    { id: 5, name: 'Esfiha de Carne', type: 'Esfiha', flavors: 'Carne', quantity: 0, price: 6.50, available: 15 },
    { id: 6, name: 'Esfiha de Calabresa', type: 'Esfiha', flavors: 'Calabresa', quantity: 0, price: 5.50, available: 12 },
    { id: 7, name: 'Esfiha de Frango', type: 'Esfiha', flavors: 'Frango', quantity: 0, price: 5.50, available: 7 },
    { id: 8, name: 'Esfiha de Chocolate', type: 'Esfiha', flavors: 'Chocolate', quantity: 0, price: 6.00, available: 20 }
  ])

  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

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
            // If quantity becomes 0, don't include this product
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

  const addToCart = (product: Product) => {
    handleProductSelect(product)
  }

  return (
    <div className="container mx-auto max-w-auto flex flex-col items-center justify-center px-4">
      <div className="flex justify-between items-center mt-4 mb-4 w-full max-w-7xl">
        <h1 className="text-3xl font-bold text-[#8B4513]">Realizar Venda</h1>
        <Button variant="ghost" className="text-[#000000]" onClick={() => router.back()}>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="relative w-full" style={{ paddingTop: '100%' }}>
                  <Image
                    src={ProdutosImage}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className={product.available === 0 ? 'grayscale' : ''}
                  />
                  <div className="absolute top-2 right-2 text-xs text-gray-500 bg-white bg-opacity-75 px-2 py-1 rounded">
                    {product.available === 0 ? 'Indisponível' : `Disponível: ${product.available}`}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="font-semibold text-base mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold">R${product.price.toFixed(2)}</span>
                    <Button 
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-[#AED970] hover:bg-[#98C256] text-[#FFFFFF] rounded-lg"
                      disabled={product.available === 0}
                      onClick={() => addToCart(product)}
                    >
                      <Plus className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
        <Button className="w-full md:w-[419px] mt-4 mb-4 bg-[#8B4513] text-[#FFFFFF] hover:bg-[#A0522D]">
          Realizar Venda
        </Button>
      </div>
    </div>
  )
}