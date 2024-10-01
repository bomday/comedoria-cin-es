"use client"; // This line makes the component a Client Component
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from 'next/image'; // Certifique-se de importar o Image corretamente
import ProdutosImage from '../../../public/assets/produtos.png';

interface Product {
  id: number
  name: string
  description: string
  available: number
}

const products: Product[] = [
  { id: 1, name: "Fantastic Shoes", description: "Fantastic baby", available: 8 },
  { id: 2, name: "Fantastic Shoes", description: "Fantastic baby", available: 8 },
  { id: 3, name: "Fantastic Shoes", description: "Fantastic baby", available: 8 },
  { id: 4, name: "Fantastic Shoes", description: "Fantastic baby", available: 8 },
  { id: 5, name: "Fantastic Shoes", description: "Fantastic baby", available: 8 },
  { id: 6, name: "Fantastic Shoes", description: "Fantastic baby", available: 8 },
  { id: 7, name: "Fantastic Shoes", description: "Fantastic baby", available: 8 },
  { id: 8, name: "Fantastic Shoes", description: "Fantastic baby", available: 8 },
  { id: 11, name: "Fantastic Shoes", description: "", available: 0 },
  { id: 12, name: "Fantastic Shoes", description: "", available: 0 },
  { id: 13, name: "Fantastic Shoes", description: "", available: 0 },
]

export default function InventoryManagement() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-[#556B2F] mb-6">Estoque</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-full lg:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Buscar"
            className="pl-10 pr-4 py-2 w-full border-none bg-transparent focus:outline-none" // Ajuste aqui
            style={{ borderRadius: '9999px' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div className="flex gap-4 w-full">
        <Button className="bg-[#F0C14B] !text-white hover:bg-[#DDB347] md:w-full h-12 text-lg font-semibold">
            Realizar Venda
        </Button>
        <Button className="bg-[#8B4513] hover:bg-[#A0522D] !text-white md:w-full h-12 text-lg font-semibold">
            Repor Estoque
        </Button>
        </div>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="relative w-full" style={{ paddingTop: '100%' }}>
          <Image
            src={ProdutosImage}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className={product.available === 0 ? 'grayscale' : ''} // filtro para produtos indisponíveis
            />
            <div className="absolute top-2 right-2 text-xs text-gray-500 bg-white bg-opacity-75 px-2 py-1 rounded">
              {product.available === 0 ? 'Indisponível' : ``}
            </div>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-base mb-2">{product.name}</h3>
            {product.available > 0 ? (
                <p className="text-sm text-gray-500">Disponível: {product.available}</p>) : null}
            </div>
        </div>
            ))}
      </div>
    </div>
  )
}