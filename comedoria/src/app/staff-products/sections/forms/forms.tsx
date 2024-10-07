"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState, useEffect } from 'react';
import { Products } from '@/app/assets/index';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  product_name: string;
  description: string;
  available: number;
}

/*const products: Product[] = [
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
];*/

export default function Forms() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Função para buscar produtos da API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/inventory'); // Ajuste a URL para seu endpoint
        if (!response.ok) {
          throw new Error('Falha ao buscar produtos');
        }
        const data = await response.json();
        setProducts(data); // Armazena os produtos da API
        setFilteredProducts(data); // Inicializa produtos filtrados
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term)
    setFilteredProducts(products.filter(product =>
      product.product_name.toLowerCase().includes(term.toLowerCase())
    ))
  }

  return (
    <section className="mt-2">
      <div className="flex flex-col gap-6 mx-auto justify-center inset-0 p-4 sm:p-6 md:p-10 lg:p-20 bg-black bg-opacity-40 z-10">
        <div className="bg-black bg-opacity-40 p-4 sm:p-6 md:p-8 rounded-lg w-full">
          <h1 className="text-2xl sm:text-3xl md:text-5xl advent-pro-700 text-[#45480F] mb-4 sm:mb-6">Estoque</h1>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-4">
            <div className="relative w-full sm:w-1/2 lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Buscar"
                className="pl-10 pr-4 py-2 w-full border-none bg-transparent focus:outline-none"
                style={{ borderRadius: "9999px" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
              <Link href="/sales" className="w-full sm:w-auto">
                <Button className="w-full bg-[#F2BF5E] hover:bg-[#D9A84E] rubik-600 h-10 sm:h-12 text-base sm:text-lg text-beige">
                  Realizar Venda
                </Button>
              </Link>
              <Link href="/inventory" className="w-full sm:w-auto">
                <Button className="w-full bg-[#9B4701] hover:bg-[#8A3E01] rubik-600 h-10 sm:h-12 text-base sm:text-lg text-beige">
                  Repor Estoque
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="shadow-sm transition-transform transform hover:scale-105 bg-background font-inter rounded-lg border-[0.29px] overflow-hidden flex flex-col"
              >
                <div className="relative w-full" style={{ paddingTop: "100%" }}>
                  <Image
                    src={Products}
                    alt={product.product_name}
                    layout="fill"
                    objectFit="cover"
                    className={product.available === 0 ? "grayscale" : ""}
                  />
                  <div className="absolute top-2 right-2 text-xs font-inter text-gray-500 bg-transparent px-2 py-1 rounded">
                    {product.available === 0 ? "Indisponível" : ``}
                  </div>
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col">
                  <h3 className="font-inter text-sm sm:text-base mb-1 sm:mb-2">{product.product_name}</h3>
                  {product.available > 0 ? (
                    <p className="text-xs sm:text-sm font-inter text-gray-500">
                      <b>Disponível: {product.available}</b>
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}