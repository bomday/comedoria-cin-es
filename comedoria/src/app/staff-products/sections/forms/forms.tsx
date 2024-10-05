"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from 'react';
import {Products} from '@/app/assets/index';
import Link from 'next/link';
import Image from 'next/image';

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

export default function Forms() {

  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="mt-2">
        <div className="flex gap-80 mx-auto justify-start inset-0 p-20 bg-black bg-opacity-40 z-10">
            <div className="bg-black bg-opacity-40 p-8 rounded-lg w-full">
                <h1 className="text-5xl advent-pro-700 text-[#45480F] mb-6">Estoque</h1>
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <div className="relative w-full md:w-full lg:w-96">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                            type="search"
                            placeholder="Buscar"
                            className="pl-10 pr-4 py-2 w-full border-none bg-transparent focus:outline-none"
                            style={{ borderRadius: '9999px' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            />
                    </div>
                    <div className="flex gap-4 w-full">
                        <Link href="/sales">
                            <Button className="flex flex-grow bg-[#F2BF5E] hover:bg-[#D9A84E] rubik-600 w-full md:w-[420px] flex-grow h-12 text-lg text-beige">
                                Realizar Venda
                            </Button>
                        </Link>
                        <Link href="/inventory">
                            <Button className="flex flex-grow bg-[#9B4701] hover:bg-[#8A3E01] rubik-600 w-full md:w-[420px] flex-grow h-12 text-lg text-beige">
                                Repor Estoque
                            </Button>
                        </Link>
                    </div>
                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {filteredProducts.map((product) => (
                <div key={product.id} className="shadow-sm transition-transform transform hover:scale-105 bg-background font-inter rounded-lg border-[0.29px] overflow-hidden flex flex-col">
                    <div className="relative w-full" style={{ paddingTop: '100%' }}>
                    <Image
                        src={Products}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className={product.available === 0 ? 'grayscale' : ''}
                        />
                        <div className="absolute top-2 right-2 text-xs font-inter text-gray-500 bg-transparent px-2 py-1 rounded">
                        {product.available === 0 ? 'Indisponível' : ``}
                        </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-inter text-base mb-2">{product.name}</h3>
                        {product.available > 0 ? (
                            <p className="text-sm font-inter text-gray-500"><b>Disponível: {product.available}</b></p>) : null}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div> 
    </section>
  )
}