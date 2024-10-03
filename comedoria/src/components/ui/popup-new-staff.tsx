"use client";

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"


export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

  const weekdays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Abrir Popup</Button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg w-[655px] h-[633px] relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Cadastrar Novo Funcionário</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Fulano Ciclano" />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="+5581999999999" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="fulanociclano@mail.com" />
                </div>
                <div>
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" type="password" placeholder="************" />
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
                <Button className="w-[200px] h-[59px] bg-[#AED970] hover:bg-[#a1d852] text-[white]">
                  Adicionar
                </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}