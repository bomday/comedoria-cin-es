'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EditProductProps {
  isOpen: boolean
  onClose: () => void
  onSave: (product: { name: string; value: string; imageLink: string } | null) => void;
}

export default function EditProduct({ isOpen, onClose, onSave }: EditProductProps) {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [imageLink, setImageLink] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ name, value, imageLink })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="edit-staff-modal-content bg-white rounded-lg shadow-lg w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Editar Produto</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">Nome</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Esfiha de Frango e Cheddar" 
                className="mt-1 bg-white"
              />
            </div>
            <div>
              <Label htmlFor="value" className="text-sm font-medium text-gray-700">Valor</Label>
              <Input 
                id="value" 
                type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder="R$ 4,00" 
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="imageLink" className="text-sm font-medium text-gray-700">Link da Imagem</Label>
              <Input 
                id="imageLink" 
                value={imageLink} 
                onChange={(e) => setImageLink(e.target.value)} 
                placeholder="https://imgur.com/sudabuadaf.png" 
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full bg-[#AED970] hover:bg-[#a1d852] text-white mt-6">
              Salvar Modificações
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}