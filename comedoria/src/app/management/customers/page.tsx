'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Search } from "lucide-react"
import Navbar from '@/components/ui/Navbar-manager'
import Sidebar from '@/components/ui/sidebar'
import ConfirmationModal from '@/components/ui/confirmation-modal'
import { Alert } from "@/components/ui/alert"
import Footer from '@/components/ui/footer'

interface Customer {
  id: number
  name: string
  email: string
}

const customers: Customer[] = [
  { id: 1, name: "Jose Emanuel Rodrigues", email: "josemmanuelrodrigues@mail.com" },
  { id: 2, name: "Maria Antônia Silva", email: "mariaantonia@mail.com" },
  { id: 3, name: "João Carlos Ferreira", email: "joaocarlos@mail.com" },
  { id: 4, name: "Ana Paula Santos", email: "anapaula@mail.com" },
  { id: 5, name: "Pedro Henrique Oliveira", email: "pedrohenrique@mail.com" },
  { id: 6, name: "Carla Beatriz Rodrigues", email: "carlabeatriz@mail.com" },
  { id: 7, name: "Lucas Gabriel Almeida", email: "lucasgabriel@mail.com" },
]

export default function CustomerManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false)
  const [alertState, setAlertState] = useState({ isVisible: false, message: '' })

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
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

  const handleCustomerExclusion = () => {
    setIsDeleteConfirmationOpen(false)
    showAlert('Cliente excluído com sucesso!')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 pt-16">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl lg:text-[52px] font-bold mb-6 text-[#556B2F]">Gerenciamento</h1>
          <div className="mb-6">
            <div className="relative">
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
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {filteredCustomers.map((customer, index) => (
              <div 
                key={customer.id} 
                className={`flex items-center justify-between p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <div>
                  <h2 className="font-bold text-lg">{customer.name}</h2>
                  <p className="text-sm text-gray-600">{customer.email}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 hover:bg-transparent"
                  onClick={() => setIsDeleteConfirmationOpen(true)}
                >
                  <Trash2 className="h-5 w-5" style={{ color: 'red' }} />
                </Button>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
      <ConfirmationModal
        isOpen={isDeleteConfirmationOpen}
        onClose={() => setIsDeleteConfirmationOpen(false)}
        onConfirm={handleCustomerExclusion}
        title="Você tem certeza que deseja excluir este cliente?"
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