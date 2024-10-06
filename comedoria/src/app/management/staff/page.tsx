'use client'

import Navbar from '@/components/ui/Navbar-manager'
import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SquarePen, Trash2, Search, ImageIcon } from "lucide-react"
import Sidebar from '@/components/ui/sidebar'
import ConfirmationModal from '@/components/ui/confirmation-modal'
import EditStaff from '@/components/ui/popup-edit-staff'
import NewStaff from '@/components/ui/popup-new-staff'
import { Alert } from "@/components/ui/alert"

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
    <>
    <Navbar />
    <div className="flex flex-col h-screen bg-gray-100 mt-16">
      <h1 className="text-[52px] font-bold p-4 pb-2 text-[#556B2F]">Gerenciamento</h1>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="relative flex-grow mr-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Buscar"
                className="pl-10 pr-4 py-2 w-full border-none bg-white focus:outline-none shadow-sm"
                style={{ borderRadius: '9999px', height: '64.91px', fontSize: '18px' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <Button
              className="bg-[#90EE90] hover:bg-[#7CFC00] py-5 px-6 text-lg font-semibold"
              style={{ color: 'white', height: '64px', padding: '0 30px', fontSize: '17px' }}
              onClick={() => setIsNewStaffModalOpen(true)}
            >
              Cadastrar Novo Funcionário
            </Button>
          </div>

          <div className="bg-white shadow-md rounded-lg">
            {filteredEmployees.map(employee => (
              <div key={employee.id} className="flex items-center mb-4 bg-[#FFFFFF] border-[0.29px] border-[#9B470180] rounded-lg">
                <div className="w-[10%] h-[80px] bg-[#F9F9DF] rounded-lg flex items-center justify-center mr-4">
                  <ImageIcon className="w-10 h-10 text-[#FFA500]" />
                </div>
                <div className="flex-grow">
                  <h2 className="font-bold">{employee.name}</h2>
                  <div className="flex items-center justify-start text-sm text-gray-600">
                    <p className="mr-4">Email: {employee.email}</p>
                  </div>
                </div>
                <div className="flex space-x-2 mr-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-[57.61px] w-[57.61px] hover:bg-transparent"
                    onClick={() => setIsEditStaffOpen(true)}
                  >
                    <SquarePen className="h-6 w-6" style={{ color: '#9B4701' }} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-[57.61px] w-[57.61px] hover:bg-transparent"
                    onClick={() => setIsDeleteConfirmationOpen(true)}
                  >
                    <Trash2 className="h-6 w-6" style={{ color: 'red' }} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <NewStaff
        isOpen={isNewStaffModalOpen}
        onClose={() => setIsNewStaffModalOpen(false)}
        onSave={handleNewEmployee} />
      <EditStaff
        isOpen={isEditStaffOpen}
        onClose={() => setIsEditStaffOpen(false)}
        onSave={handleEmployeeEdit} employee={null} />
      <ConfirmationModal
        isOpen={isDeleteConfirmationOpen}
        onClose={() => setIsDeleteConfirmationOpen(false)}
        onConfirm={handleEmployeeExclusion}
        title="Você tem certeza que deseja excluir este funcionário?"
        confirmText="Sim, quero excluir"
        cancelText="Não, não quero" />
      <Alert
        message={alertState.message}
        isVisible={alertState.isVisible}
        onClose={hideAlert} />
    </div></>
  )
}