'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import NavbarLogged from '@/components/ui/Navbar-logged'
import PriceBanner from '@/components/ui/price-banner'
import Footer from '@/components/ui/footer'
import {CartComponent} from './sections/CartComponent/cartComponent';
import {ProductGrid} from './sections/ProductGrid/page';
import {SearchBar} from './sections/SearchBar/page';
import { useCart } from './sections/CartComponent/useCartHook/page'

export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  available: number;
}

export const products: Product[] = [
  { id: 1, name: 'Esfiha de Frango e Cheddar', quantity: 0, price: 5.50, available: 10 },
  { id: 2, name: 'Esfiha de Frango e Catupiry', quantity: 0, price: 5.50, available: 8 },
  { id: 3, name: 'Esfiha de Frango e Calabresa', quantity: 0, price: 6.00, available: 5 },
  { id: 4, name: 'Esfiha de Queijo', quantity: 0, price: 5.00, available: 0 },
  { id: 5, name: 'Esfiha de Carne', quantity: 0, price: 6.50, available: 15 },
  { id: 6, name: 'Esfiha de Calabresa', quantity: 0, price: 5.50, available: 12 },
  { id: 7, name: 'Esfiha de Frango', quantity: 0, price: 5.50, available: 7 },
  { id: 8, name: 'Esfiha de Chocolate', quantity: 0, price: 6.00, available: 20 },
  { id: 9, name: 'Esfiha de Chocolate', quantity: 0, price: 6.00, available: 20 }
];

export default function FecharVenda() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const router = useRouter()
  const { cartItems, addToCart, updateQuantity, calculateTotal } = useCart()

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term)
    setFilteredProducts(products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase())
    ))
  }

  const handleCheckout = () => {
    const cartData = JSON.stringify(cartItems)
    router.push(`/products/reservation?cart=${encodeURIComponent(cartData)}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarLogged />
      <div className="mt-16"> 
        <PriceBanner/>
      </div>
      <div className="container mx-auto max-w-auto flex flex-col items-center justify-center px-4 mt-8 mb-8">
        <div className="flex justify-between flex-col md:flex-row md:space-x-4 w-full max-w-7xl">
          <div className="w-full md:w-2/3">
            <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearchTermChange} />
            <ProductGrid products={filteredProducts} addToCart={addToCart} />
          </div>
          <CartComponent
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            onCheckout={handleCheckout}
            calculateTotal={calculateTotal}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}