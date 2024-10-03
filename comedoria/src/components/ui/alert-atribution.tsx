import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Alert } from "@/components/ui/alert"

interface alertTable {
  isOpen: boolean
  onClose: () => void
}

const employees = [
  { name: "João Silva" },
  { name: "Ana Clara" },
  { name: "Pedro Almeida" },
]

export default function AssignSubstitutionModal({ isOpen, onClose }: alertTable) {
 
  const [shiftEmployee, setShiftEmployee] = useState("Maria Antônia")

  const [selectedCover, setSelectedCover] = useState("")

  const [showOverlay, setShowOverlay] = useState(false)

  const handleSave = () => {
    setShowOverlay(true)
    setTimeout(() => setShowOverlay(false), 2000) // Alerta será fechado após 2 segundos
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Atribuir Substituição</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
      
          <div>
            <label className="block text-sm font-medium text-gray-700">Funcionário do Turno:</label>
            <input
              type="text"
              value={shiftEmployee} 
              onChange={(e) => setShiftEmployee(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Funcionário Cobridor:</label>
            <select
              className="w-full px-3 py-2 mt-1 border rounded-md"
              value={selectedCover}
              onChange={(e) => setSelectedCover(e.target.value)}>

              <option value="">Selecionar Funcionário</option>
              {employees.map((employee, index) => (
                <option key={index} value={employee.name}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Button onClick={handleSave} className="w-full mt-4 bg-[#A3D77E] hover:bg-[#94c86e] text-white">
              Salvar Modificações
            </Button>
          </div>
        </div>
        <Alert
            message="Alterações salvas com sucesso!"
            isVisible={showOverlay}
            onClose={() => setShowOverlay(false)}
        />
      </DialogContent>
    </Dialog>
  )
}
