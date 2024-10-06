'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EditInfoProps {
  isOpen: boolean
  onClose: () => void
  onSave: () => void
}

export default function EditInfo({ isOpen, onClose, onSave }: EditInfoProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="edit-staff-modal-content bg-white bg-opacity-100 rounded-lg shadow-lg w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Editando Informações</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Informe seu nome"
                className="rounded-[6px] border border-gray-300"
              />
            </div>
            <div>
              <Label htmlFor="type">E-mail</Label>
              <Input 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Informe seu novo e-mail" 
                className="rounded-[6px] border border-gray-300"
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="w-full bg-[#AED970] hover:bg-[#a1d852] text-white">
                Salvar Mudanças
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}