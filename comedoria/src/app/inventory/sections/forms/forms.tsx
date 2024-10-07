"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeft, Search, Plus, Minus, Image as ImageIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert } from "@/components/ui/alert";
import Link from 'next/link';

interface Product {
  id: number
  name: string
  quantity: number
}

export default function InventoryReposition() {
  const router = useRouter()

  const [products] = useState<Product[]>([
    { id: 1, name: 'Esfiha de Frango e Cheddar', quantity: 0 },
    { id: 2, name: 'Esfiha de Frango e Catupiry', quantity: 0 },
    { id: 3, name: 'Esfiha de Frango e Calabresa', quantity: 0 },
    { id: 4, name: 'Esfiha de Queijo', quantity: 0 },
    { id: 5, name: 'Esfiha de Frango e Cheddar', quantity: 0 },
    { id: 6, name: 'Esfiha de Frango e Catupiry', quantity: 0 },
    { id: 7, name: 'Esfiha de Frango e Calabresa', quantity: 0 },
    { id: 8, name: 'Esfiha de Queijo', quantity: 0 }
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
        setShowAlert(false);
        router.push('/staff-products');
      }, 1000);
  }

  return (
    <section className="mt-2">
        <div className="flex flex-col items-center inset-0 p-4 sm:p-6 md:p-10 lg:p-20 justify-start bg-black bg-opacity-40 z-10">
            <div className="mt-7 flex justify-between items-center mt-2 sm:mt-8 mb-4 w-full max-w-7xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl advent-pro-700 text-[#9B4701]">Repor Estoque</h1>
                <Link href="/staff-products">
                    <Button className="bg-transparent border-none text-white hover:bg-[#F0F0F0]">
                        <ArrowLeft className="mr-2 h-6 w-6 sm:h-8 sm:w-8" />
                    </Button>
                </Link>
            </div>
        
            <div className="flex justify-between flex-col lg:flex-row lg:space-x-4 w-full max-w-7xl">
                <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
                <div className="relative flex justify-between mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                    type="text" 
                    placeholder="Buscar" 
                    className="pl-10 w-full font-inter" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {filteredProducts.map(product => (
                    <div key={product.id} className="flex items-center mb-4 bg-background border-[0.29px] border-[#9B470180] rounded-lg">
                    <div className="w-[15%] h-[60px] sm:h-[80px] bg-[#F9F9DF] rounded-lg flex items-center justify-center mr-2 sm:mr-4">
                        <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#FFA500]"/>
                    </div>
                    <div className="flex-grow">
                        <h2 className="font-inter text-sm sm:text-base"><b>{product.name}</b></h2>
                    </div>
                    <Button
                        size="sm"
                        className="h-[40px] w-[40px] sm:h-[57.61px] sm:w-[57.61px] bg-[#AED970] hover:bg-[#98C256] text-[#FFFFFF] mr-2 sm:mr-4 rounded-lg"
                        onClick={() => handleProductSelect(product)}>
                        <Plus className="h-6 w-6 sm:h-8 sm:w-8" />
                    </Button>
                    </div>
                ))}
                </div>

                <div className="w-full lg:w-[419px]">
                {selectedProducts.map(product => (
                    <div key={product.id} className="shadow-sm transition-transform transform hover:scale-105 mb-4 bg-[#FFFFFF] border-[0.29px] border-[#9B470180] rounded-lg">
                    <div className="flex items-center">
                        <div className="w-[15%] h-[60px] sm:h-[72px] bg-[#F9F9DF] rounded-lg flex items-center justify-center mr-2 sm:mr-4">
                        <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFA500]"/>
                        </div>
                        <div className="flex-grow">
                        <h2 className="font-inter text-sm sm:text-base"><b>{product.name}</b></h2>
                        </div>
                        <div className="flex items-center ml-auto mr-2">
                        <Button
                            size="sm"
                            className="bg-[#F9F9DF] hover:bg-[#E0E0B0] border-transparent" 
                            onClick={() => handleQuantityChange(product.id, -1)}
                        >
                            <Minus className="h-3 w-3 text-[#8B4513]" />
                        </Button>
                        <span className="w-6 text-center font-inter"><b>{product.quantity}</b></span>
                        <Button
                            size="sm"
                            className="bg-[#F9F9DF] hover:bg-[#E0E0B0] border-transparent"
                            onClick={() => handleQuantityChange(product.id, 1)}
                        >
                            <Plus className="h-3 w-3 text-[#8B4513]" />
                        </Button>
                        </div>
                    </div>
                    </div>
                ))}

                {selectedProducts.length === 0 && (
                    <div className="flex justify-center">
                        <p className="text-center font-inter text-gray-500 text-sm sm:text-base">Nenhum produto selecionado</p>
                    </div>
                )}

                <Button onClick={() => handleReposition()} className="w-full mt-4 bg-[#9B4701] rubik-600 text-base sm:text-lg text-beige hover:bg-[#8A3E01]">
                    Repor Estoque
                </Button>
                </div>
            </div>

            <Alert
                message="Sua reposição foi efetuada com sucesso!"
                isVisible={showAlert}
                onClose={() => setShowAlert(false)}
            />
        </div>
    </section>
  )
}