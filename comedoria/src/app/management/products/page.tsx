'use client'

import { useState, useCallback } from 'react'
import Navbar from '@/components/ui/Navbar-manager'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SquarePen, Trash2, Search, ImageIcon } from "lucide-react"
import Sidebar from '@/components/ui/sidebar'
import ConfirmationModal from '@/components/ui/confirmation-modal'
import EditProduct from '@/components/ui/popup-edit-product'
import NewProduct from '@/components/ui/popup-new-product'
import { Alert } from "@/components/ui/alert"
import Footer from '@/components/ui/footer'

interface Product {
  id: number
  name: string
  price: number
  available: number
}

const products: Product[] = [
  { id: 1, name: "Esfiha de frango e cheddar", price: 15.00, available: 8},
  { id: 2, name: "Coxinha de Queijo", price: 15.00, available: 8},
  { id: 3, name: "Pastel de carne", price: 15.00, available: 8},
  { id: 4, name: "Coxinha de frango", price: 15.00, available: 8},
  { id: 5, name: "Coxinha de carne", price: 15.00, available: 8},
  { id: 6, name: "Hamburguer com Cheddar", price: 15.00, available: 8},
]

export default function ProductManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false)
  const [isEditProductOpen, setIsEditProductOpen] = useState(false)
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false)
  const [alertState, setAlertState] = useState({ isVisible: false, message: '' })

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const showAlert = useCallback((message: string) => {
    setAlertState({ isVisible: true, message })
    setTimeout(() => {
      setAlertState(prev => ({ ...prev, isVisible: false }))
    }, 3000)
  }, [])

  const hideAlert = useCallback(() => {
    setAlertState(prev => ({ ...prev, isVisible: false }))
  }, [])

  const handleProductExclusion = () => {
    setIsDeleteConfirmationOpen(false)
    showAlert('Produto excluído com sucesso!')
  }

  const handleProductEdit = () => {
    setIsEditProductOpen(false)
    showAlert('Produto editado com sucesso!')
  }

  const handleNewProduct = () => {
    setIsNewProductModalOpen(false)
    showAlert('Novo produto cadastrado com sucesso!')
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1 pt-16">
        <Sidebar />
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <h1 className="text-3xl lg:text-[52px] font-bold mb-6 text-[#556B2F]">Gerenciamento</h1>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 space-y-4 lg:space-y-0">
            <div className="relative w-full lg:w-auto lg:flex-grow lg:mr-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Buscar"
                className="pl-10 pr-4 py-2 w-full border-none bg-white focus:outline-none shadow-sm text-base lg:text-lg"
                style={{ borderRadius: '9999px', height: '50px', fontSize: '16px' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              className="w-full lg:w-auto bg-[#90EE90] hover:bg-[#7CFC00] py-3 px-4 text-base lg:text-lg font-semibold"
              style={{ color: 'white', height: '50px', fontSize: '16px' }}
              onClick={() => setIsNewProductModalOpen(true)}
            >
              Cadastrar Novo Produto
            </Button>
          </div>

          <div className="bg-white shadow-md rounded-lg lg:p-4">
            {filteredProducts.map(product => (
              <div key={product.id} className="flex items-center mb-4 bg-[#FFFFFF] border-b lg:border-[0.29px] lg:border-[#9B470180] lg:rounded-lg p-4">
                <div className="w-[60px] h-[30px] lg:w-[10%] lg:h-[50px] bg-[#F9F9DF] rounded-lg flex items-center justify-center mr-4">
                  <ImageIcon className="w-8 h-8 lg:w-10 lg:h-10 text-[#FFA500]" />
                </div>
                <div className="flex-grow">
                  <h2 className="font-bold text-lg">{product.name}</h2>
                  <div className="flex items-center justify-start text-sm text-gray-600">
                    <p className="mr-4">R$ {product.price.toFixed(2)} - Disponível: {product.available}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 lg:h-[57.61px] lg:w-[57.61px] hover:bg-transparent"
                    onClick={() => setIsEditProductOpen(true)}
                  >
                    <SquarePen className="h-5 w-5 lg:h-6 lg:w-6" style={{ color: '#9B4701' }} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 lg:h-[57.61px] lg:w-[57.61px] hover:bg-transparent"
                    onClick={() => setIsDeleteConfirmationOpen(true)}
                  >
                    <Trash2 className="h-5 w-5 lg:h-6 lg:w-6" style={{ color: 'red' }} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
      <NewProduct
        isOpen={isNewProductModalOpen}
        onClose={() => setIsNewProductModalOpen(false)}
        onSave={handleNewProduct}
      />
      <EditProduct
        isOpen={isEditProductOpen}
        onClose={() => setIsEditProductOpen(false)}
        onSave={handleProductEdit}
      />
      <ConfirmationModal
        isOpen={isDeleteConfirmationOpen}
        onClose={() => setIsDeleteConfirmationOpen(false)}
        onConfirm={handleProductExclusion}
        title="Você tem certeza que deseja excluir este produto?"
        confirmText="Sim, quero excluir"
        cancelText="Não, não quero"
      />
      <Alert
        message={alertState.message}
        isVisible={alertState.isVisible}
        onClose={hideAlert}
      />
    </div>
  )
}