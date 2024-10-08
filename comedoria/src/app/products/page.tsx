'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import NavbarLogged from '@/components/ui/Navbar-logged'
import PriceBanner from '@/components/ui/price-banner'
import Footer from '@/components/ui/footer'
import {CartComponent} from './sections/CartComponent/cartComponent';
import {ProductGrid} from './sections/ProductGrid/productGrid';
import {SearchBar} from './sections/SearchBar/searchBar';
import { useCart } from './sections/CartComponent/useCartHook/useCart'
import { useSession } from 'next-auth/react'
import Loading from '@/app/(errors)/loading/loading'
import AuthenticationError from '@/app/(errors)/authentication-error/authentication-error'

export interface Product {
  product_name: string,
  stock: number,
  price: number,
  image_url: string
}

export default function FecharVenda() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const router = useRouter()
  const { cartItems, addToCart, updateQuantity, calculateTotal } = useCart()
  const { data: session, status } = useSession();

  useEffect(() => {
    // Função para buscar produtos da API
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/inventory'); // Ajuste a URL para corresponder ao seu endpoint

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
  
  if (status === "loading") {
    return <Loading/>
  }

  if (status === "unauthenticated") {
    return <AuthenticationError/>
  }

  // Só tenta acessar o usuário quando a sessão estiver autenticada
  const user = session?.user

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term)
    setFilteredProducts(products.filter(product =>
      product.product_name.toLowerCase().includes(term.toLowerCase())
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
      <div className="min-h-[57vh] container mx-auto max-w-auto flex flex-col items-center justify-top mt-8 mb-8">
        <div className="flex justify-between flex-col md:flex-row md:space-x-4 w-full max-w-7xl">
          <div className="w-full md:w-2/3 pt-4">
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