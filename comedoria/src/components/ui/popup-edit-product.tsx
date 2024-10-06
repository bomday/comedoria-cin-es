'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface Product {
  id: number
  name: string
  type: string
  value: string
  flavors: string[]
}

interface EditProductProps {
  isOpen: boolean
  onClose: () => void
  onSave: () => void
  product: Product | null
}

export default function EditProduct({ isOpen, onClose, onSave, product }: EditProductProps) {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [value, setValue] = useState('')
  const [newFlavor, setNewFlavor] = useState('')
  const [flavors, setFlavors] = useState([
    { name: 'Frango', checked: false },
    { name: 'Catupiry', checked: false },
    { name: 'Cheddar', checked: false },
    { name: 'Mussarela', checked: false },
    { name: 'Carne', checked: false },
    { name: 'Presunto', checked: false },
    { name: 'Salsicha', checked: false },
  ])

  useEffect(() => {
    if (product) {
      setName(product.name)
      setType(product.type)
      setValue(product.value)
      setFlavors(flavors.map(flavor => ({
        ...flavor,
        checked: product.flavors.includes(flavor.name)
      })))
    }
  }, [product])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Updated product:', { 
      name, 
      type, 
      value, 
      flavors: flavors.filter(f => f.checked).map(f => f.name) 
    })
    onSave()
    onClose()
  }

  const handleFlavorChange = (index: number) => {
    const newFlavors = [...flavors]
    newFlavors[index].checked = !newFlavors[index].checked
    setFlavors(newFlavors)
  }

  const addNewFlavor = () => {
    if (newFlavor.trim() !== '') {
      setFlavors([...flavors, { name: newFlavor, checked: true }])
      setNewFlavor('')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="edit-staff-modal-content bg-white rounded-lg shadow-lg w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Editar Produto</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Esfiha de Frango e Cheddar" 
                required
              />
            </div>
            <div>
              <Label htmlFor="type">Tipo</Label>
              <Input 
                id="type" 
                value={type} 
                onChange={(e) => setType(e.target.value)} 
                placeholder="Esfiha" 
                required
              />
            </div>
            <div>
              <Label htmlFor="value">Valor</Label>
              <Input 
                id="value" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder="4,00" 
                required
              />
            </div>
            <div>
              <Label className="mb-2 block">Sabores</Label>
              <div className="grid grid-cols-2 gap-2">
                {flavors.map((flavor, index) => (
                  <div key={flavor.name} className="flex items-center">
                    <Checkbox 
                      id={`flavor-${index}`} 
                      checked={flavor.checked}
                      onCheckedChange={() => handleFlavorChange(index)}
                    />
                    <Label htmlFor={`flavor-${index}`} className="ml-2 text-sm">
                      {flavor.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Input 
                value={newFlavor} 
                onChange={(e) => setNewFlavor(e.target.value)} 
                placeholder="Novo sabor" 
              />
              <Button 
                type="button" 
                onClick={addNewFlavor} 
                className="bg-[#FFA500] hover:bg-[#FF8C00] text-white"
              >
                Adicionar Novo Sabor
              </Button>
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="w-full bg-[#AED970] hover:bg-[#a1d852] text-white">
                Salvar Modificações
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}