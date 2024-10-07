'use client'

import { useState, useCallback } from 'react'
import Navbar from '@/components/ui/Navbar-manager'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SquarePen, Trash2, Search, ImageIcon } from "lucide-react"
import Sidebar from '@/components/ui/sidebar'
import ConfirmationModal from '@/components/ui/confirmation-modal'
import EditStaff from '@/components/ui/popup-edit-staff'
import NewStaff from '@/components/ui/popup-new-staff'
import { Alert } from "@/components/ui/alert"
import Footer from '@/components/ui/footer'

interface Employee {
  id: number
  name: string
  email: string
}

const employees: Employee[] = [
  { id: 1, name: "Maria Antônia", email: "mariaantonia@gmail.com" },
  { id: 2, name: "Williams Andrade", email: "willandrade@gmail.com" },
  { id: 3, name: "José da Silva", email: "josesilva@gmail.com" },
  { id: 4, name: "Fernanda Oliveira", email: "fernanda@gmail.com" },
  { id: 5, name: "Maria Eduarda", email: "mariaeduarda@gmail.com" },
]

export default function EmployeeManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isNewStaffModalOpen, setIsNewStaffModalOpen] = useState(false)
  const [isEditStaffOpen, setIsEditStaffOpen] = useState(false)
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false)
  const [alertState, setAlertState] = useState({ isVisible: false, message: '' })

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase())
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

  const handleEmployeeExclusion = () => {
    setIsDeleteConfirmationOpen(false)
    showAlert('Funcionário excluído com sucesso!')
  }

  const handleEmployeeEdit = () => {
    setIsEditStaffOpen(false)
    showAlert('Funcionário editado com sucesso!')
  }

  const handleNewEmployee = () => {
    setIsNewStaffModalOpen(false)
    showAlert('Novo funcionário cadastrado com sucesso!')
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
              onClick={() => setIsNewStaffModalOpen(true)}
            >
              Cadastrar Novo Funcionário
            </Button>
          </div>

          <div className="bg-white shadow-md rounded-lg lg:p-4">
            {filteredEmployees.map(employee => (
              <div key={employee.id} className="flex items-center mb-4 bg-[#FFFFFF] border-b lg:border-[0.29px] lg:border-[#9B470180] lg:rounded-lg p-4">
                <div className="w-[60px] h-[30px] lg:w-[10%] lg:h-[50px] bg-[#F9F9DF] rounded-lg flex items-center justify-center mr-4">
                  <ImageIcon className="w-8 h-8 lg:w-10 lg:h-10 text-[#FFA500]" />
                </div>
                <div className="flex-grow">
                  <h2 className="font-bold text-lg">{employee.name}</h2>
                  <div className="flex items-center justify-start text-sm text-gray-600">
                    <p className="mr-4">{employee.email}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 lg:h-[57.61px] lg:w-[57.61px] hover:bg-transparent"
                    onClick={() => setIsEditStaffOpen(true)}
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
      <NewStaff
        isOpen={isNewStaffModalOpen}
        onClose={() => setIsNewStaffModalOpen(false)}
        onSave={handleNewEmployee}
      />
      <EditStaff
        isOpen={isEditStaffOpen}
        onClose={() => setIsEditStaffOpen(false)}
        onSave={handleEmployeeEdit}
        employee={null}
      />
      <ConfirmationModal
        isOpen={isDeleteConfirmationOpen}
        onClose={() => setIsDeleteConfirmationOpen(false)}
        onConfirm={handleEmployeeExclusion}
        title="Você tem certeza que deseja excluir este funcionário?"
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