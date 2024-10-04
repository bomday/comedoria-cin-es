"use client";

import { useState, useEffect } from 'react'
import { Search, Plus, Minus, Image as ImageIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import ".././globals.css";
import ProdutosImage from '../../app/assets/images/produtos.png'
import {useRouter} from 'next/navigation'

interface Product {
  id: number
  name: string
  price: number
  available: number
  type: string;
  flavor: string;
}

interface CartItem extends Product {
  quantity: number
}

const products: Product[] = [
  { id: 1, name: "Esfiha de frango e cheddar", price: 15.00, available: 8, type: "Esfiha", flavor: "Frango"},
  { id: 2, name: "Coxinha de Queijo", price: 15.00, available: 8, type: "Coxinha", flavor: "Queijo"},
  { id: 3, name: "Pastel de carne", price: 15.00, available: 8, type: "Pastel", flavor: "Carne"},
  { id: 4, name: "Coxinha de frango", price: 15.00, available: 8, type: "Coxinha", flavor: "Frango"},
  { id: 5, name: "Coxinha de carne", price: 15.00, available: 8, type: "Coxinha", flavor: "Carne"},
  { id: 6, name: "Hamburguer com Cheddar", price: 15.00, available: 8, type: "Hamburguer", flavor: "Cheddar"},
]

function CartComponent({ cartItems, updateQuantity, onCheckout}: { //essa função é importante
  cartItems: CartItem[],
  updateQuantity: (id: number, change: number) => void,
  onCheckout: () => void}) {
  
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Seu carrinho</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="mb-4 pb-4 border-b">
          <div className="flex items-center mb-2">
            <div className="bg-gray-200 w-12 h-12 flex items-center justify-center mr-2">
              <ImageIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">R${item.price.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
            <Button 
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#f9f9df',
              color: '#a15213',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            size="default" variant="btnGreen" onClick={() => updateQuantity(item.id, -1)} className="rounded-full w-6 h-6 p-0">
              <Minus className="h-4 w-4" />
            </Button>
              <span className="mx-2">{item.quantity}</span>
              <Button 
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#f9f9df',
                color: '#a15213',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              size="default" variant="btnGreen" onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 p-0">
              <Plus className="h-4 w-4" />
            </Button>
            </div>
            <p className="font-semibold">R${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      ))}
      <button
        onClick={onCheckout} //isso também é importante
        style={{ color: 'white', backgroundColor: '#8B4513' }}
        className="w-full py-2 px-4 font-bold rounded-lg shadow-md hover:bg-[#A0522D] transition-colors duration-200"
      >
        Fazer Reserva
      </button>
    </div>
  )
}

export default function Component() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])  //isso também é importante
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + change) } 
          : item
      ).filter(item => item.quantity > 0)
    )
  }

  useEffect(() => {  //isso também é importante
    const filtered = products.filter(product => {
      const matchesType = !selectedType || product.type === selectedType
      const matchesFlavor = !selectedFlavor || product.flavor === selectedFlavor
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesType && matchesFlavor && matchesSearch
    })
    setFilteredProducts(filtered)
  }, [selectedType, selectedFlavor, searchTerm])

  const types = Array.from(new Set(products.map(p => p.type)))
  const flavors = Array.from(new Set(products.map(p => p.flavor)))

  const router = useRouter()  //isso também é importante


  const handleCheckout = () => {
    const cartData = JSON.stringify(cartItems)  //isso também é importante
    router.push(`/customer-reservations/finalize-reservations?cart=${encodeURIComponent(cartData)}`)  //isso também é importante
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 p-4 bg-white shadow-md">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            <Input 
              type="search" 
              placeholder="Search" 
              className="pl-10 pr-4 py-2 w-full border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
              style={{ borderRadius: '9999px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Tipo</h2>
            <div className="flex flex-wrap gap-2">
              {types.map((tipo) => (
                <Button 
                key={tipo} 
                variant={null}
                style={{
                  backgroundColor: selectedType === tipo ? "#FEF3C7" : "#FFFBEB",
                  borderColor: "#FEF3C7",
                  padding: '0.5rem 1rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onClick={() => setSelectedType(selectedType === tipo ? null : tipo)}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#FEF3C7"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedType === tipo ? "#FEF3C7" : "#FFFBEB"}
              >
                {tipo}
              </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-bold mb-2">Sabor</h2>
            <div className="flex flex-wrap gap-2">
              {flavors.map((sabor) => (
                <button
                  key={sabor}
                  style={{
                    backgroundColor: selectedFlavor === sabor ? '#FFE0B2' : '#FFF5E6',
                    border: '1px solid #FFE0B2',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                  onClick={() => setSelectedFlavor(selectedFlavor === sabor ? null : sabor)}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFE0B2'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedFlavor === sabor ? '#FFE0B2' : '#FFF5E6'}
                >
                  {sabor}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="relative w-full" style={{ paddingTop: '100%' }}>
                  <Image
                    src={ProdutosImage}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-2 right-2 text-xs text-gray-500 bg-white bg-opacity-75 px-2 py-1 rounded">
                    {product.available === 0 ? 'Indisponível' : `Disponível: ${product.available}`}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="font-semibold text-base mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold">R${product.price.toFixed(2)}</span>
                    <button 
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                      disabled={product.available === 0}
                      onClick={() => addToCart(product)}
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart */}
        <CartComponent
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        onCheckout={handleCheckout}/>  //isso também é importante
      </div>
    </div>
  )
}