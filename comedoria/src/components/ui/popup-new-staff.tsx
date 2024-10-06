'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface NewStaffProps {
  isOpen: boolean
  onClose: () => void
  onSave: () => void
}

export default function NewStaff({ isOpen, onClose, onSave }: NewStaffProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const weekdays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission,
    // such as sending the data to an API
    console.log('New staff member:', { name, email, phone, password })
    onSave()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="edit-staff-modal-content bg-white rounded-lg shadow-lg w-[655px] h-[633px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Cadastrar Novo Funcionário</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Fulano Ciclano" 
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input 
                id="phone" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                placeholder="+5581999999999" 
              />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="fulanociclano@mail.com" 
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input 
                id="password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="************" 
                required
              />
            </div>
            <div>
              <Label className="mb-2 block">Horários</Label>
              <div className="grid grid-cols-5 gap-2">
                {weekdays.map((day) => (
                  <div key={day} className="flex flex-col items-center">
                    <Label className="mb-1 text-sm">{day}</Label>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Checkbox id={`${day}-morning`} />
                        <Label htmlFor={`${day}-morning`} className="ml-2 text-sm">
                          Manhã
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id={`${day}-afternoon`} />
                        <Label htmlFor={`${day}-afternoon`} className="ml-2 text-sm">
                          Tarde
                        </Label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="w-[200px] h-[59px] bg-[#AED970] hover:bg-[#a1d852] text-white">
                Adicionar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}