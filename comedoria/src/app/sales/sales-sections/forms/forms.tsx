'use client'

import { useState, useEffect  } from 'react';
import { ArrowLeft, Search, Plus, Minus, Image as ImageIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Products} from '@/app/assets/index';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Product {
  product_name: string,
  stock: number,
  price: number,
  image_url: string
}

export default function Sales() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    // Função para buscar produtos da API
    const fetchProducts = async () => {
      try {
        console.log("CHAMANDO API")
        const response = await fetch('/api/inventory'); // Ajuste a URL para corresponder ao seu endpoint
        console.log("RESPOSTA " + response)
        if (!response.ok) {
          throw new Error('Falha ao buscar produtos');
        }
        const data = await response.json();
        setProducts(data); // Armazena produtos retornados da API
        setFilteredProducts(data); // Inicializa produtos filtrados
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductSelect = (product: Product) => {
    const isSelected = selectedProducts.some(p => p.product_name === p.product_name);
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter(p => p.product_name !== p.product_name));
    } else {
      setSelectedProducts([...selectedProducts, { ...product, stock: 1 }]);
    }
  };

  const handleQuantityChange = (name: string, change: number) => {
    setSelectedProducts(prevProducts =>
      prevProducts.reduce((acc, product) => {
        if (product.product_name === name) {
          const newQuantity = Math.max(0, product.stock + change);
          return [...acc, { ...product, stock: newQuantity }];
        }
        return [...acc, product];
      }, [] as Product[])
    );
  };

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term)
    setFilteredProducts(products.filter(product =>
      product.product_name.toLowerCase().includes(term.toLowerCase())
    ))
  }

  const generateFinalizeLink = () => {
    const queryParams = selectedProducts
      .filter(product => product.stock > 0)
      .map((product, index) => `product_${index + 1}=${encodeURIComponent(product.product_name)}&quantity_${index + 1}=${encodeURIComponent(product.stock)}&price_${index + 1}=${encodeURIComponent(product.price)}`)
      .join('&');

    return `/sales/finalize-sales?${queryParams}`;
  };

  return (
    <section className="mt-2">
      <div className="flex flex-col items-center inset-0 p-20 justify-start bg-black bg-opacity-40 z-10">
        <div className="flex justify-between items-center mt-4 mb-4 w-full max-w-7xl">
          <h1 className="text-5xl advent-pro-700 text-[#F2BF5E]">Realizar Venda</h1>
          <Link href="/staff-products">
            <Button className="bg-transparent border-none text-white hover:bg-[#F0F0F0]">
              <ArrowLeft className="mr-2 h-8 w-8" />
            </Button>
          </Link>
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
                <div key={product.product_name} className="shadow-sm transition-transform transform hover:scale-105 bg-background border-[0.29px] rounded-lg overflow-hidden flex flex-col">
                  <div className="relative w-full" style={{ paddingTop: '100%' }}>
                    <Image
                      src={Products}
                      alt={product.product_name}
                      layout="fill"
                      objectFit="cover"
                      className={product.stock === 0 ? 'grayscale' : ''}
                    />
                    <div className="absolute top-2 right-2 text-xs font-inter text-gray-500 bg-transparent px-2 py-1 rounded">
                      {product.stock === 0 ? 'Indisponível' : `Disponível: ${product.stock}`}
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <h3 className="font-inter text-base mb-2">{product.product_name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-base font-inter"><b>R${product.price.toFixed(2)}</b></span>
                      <Button
                        size="sm"
                        className="bg-[#AED970] hover:bg-[#98C256] text-[#FFFFFF] rounded-lg"
                        disabled={product.stock === 0}
                        onClick={() => handleProductSelect(product)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[419px]">
            {selectedProducts.map(product => (
              <div key={product.product_name} className="shadow-sm transition-transform transform hover:scale-105 mb-4 bg-background border-[0.29px] border-[#9B470180] rounded-lg">
                <div className="flex items-center">
                  <div className="w-[15%] h-[72px] bg-[#F9F9DF] rounded-lg flex items-center justify-center mr-4">
                    <ImageIcon
                      className="w-8 h-8 text-[#FFA500]"
                    />
                  </div>
                  <div>
                    <h2 className="font-inter"><b>{product.product_name}</b></h2>
                  </div>
                  <div className="flex items-center ml-auto mr-2">
                    <Button
                      size="sm"
                      className="bg-[#F9F9DF] hover:bg-[#E0E0B0] border-[#8B4513]" 
                      onClick={() => handleQuantityChange(product.product_name, -1)}
                    >
                      <Minus className="h-3 w-3 text-[#8B4513]" />
                    </Button>
                    <span className="w-6 text-center font-inter"><b>{product.stock}</b></span>
                    <Button
                      size="sm"
                      className="bg-[#F9F9DF] hover:bg-[#E0E0B0] border-[#8B4513]"
                      onClick={() => handleQuantityChange(product.product_name, 1)}
                    >
                      <Plus className="h-3 w-3 text-[#8B4513]" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {selectedProducts.length === 0 && (
              <div className="p-4 font-inter text-gray-500">Nenhum produto selecionado</div>
            )}
            <div className="flex justify-between mt-4">
              <span className="font-inter"><b>Total:</b></span>
              <span className="font-inter"><b>R${selectedProducts.reduce((total, product) => total + (product.price * product.stock), 0).toFixed(2)}</b></span>
            </div>
            <Link href={generateFinalizeLink()} passHref>
              <Button
                variant='btnWine'
                className="mt-4 w-full text-lg rubik-600" 
                disabled={selectedProducts.length === 0}
              >
                Finalizar Venda
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
