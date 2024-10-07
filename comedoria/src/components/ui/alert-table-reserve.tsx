import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ReservasSemanaisModalProps {
  isOpen: boolean
  onClose: () => void
}

const reservasData = [
  { nome: "Jose Gabriel Henrique", status: "Ativa", dataHora: "23/09/24 / 17:38", valor: "R$ 12,00" },
  { nome: "Jose Gabriel Henrique de Bastos", status: "Finalizada", dataHora: "23/09/24 / 17:38", valor: "R$ 14,00" },
  { nome: "Jose Gabriel", status: "Cancelada", dataHora: "24/09/24 / 17:38", valor: "R$ 27,00" },
  { nome: "Jose Gabriel Henrique", status: "Finalizada", dataHora: "24/09/24 / 17:38", valor: "R$ 64,00" },
  { nome: "Jose Gabriel Henrique", status: "Finalizada", dataHora: "25/09/24 / 17:38", valor: "R$ 37,00" },
  { nome: "Jose Gabriel Henrique", status: "Finalizada", dataHora: "25/09/24 / 17:38", valor: "R$ 18,00" },
  { nome: "Jose Gabriel Henrique", status: "Finalizada", dataHora: "26/09/24 / 17:38", valor: "R$ 29,00" },
]

export default function ReserveModal({ isOpen, onClose }: ReservasSemanaisModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Reservas Semanal</DialogTitle>
        </DialogHeader>
        <div className="mt-4 max-h-[400px] overflow-y-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-center font-semibold">Nome</th>
                <th className="py-2 px-4 text-center border-l border-r border-dashed font-semibold">Status</th>
                <th className="py-2 px-4 text-center border-l border-r border-dashed font-semibold">Data / Hora</th>
                <th className="py-2 px-4 text-center font-semibold">Valor</th>
              </tr>
            </thead>
            <tbody>
              {reservasData.map((item, index) => (
                <tr key={index} className="justify-center">
                  <td className="py-2 px-4 text-center">{item.nome}</td>
                  <td className="py-2 px-4 text-center border-l border-dashed">{item.status}</td>
                  <td className="py-2 px-4 text-center border-l border-dashed">{item.dataHora}</td>
                  <td className="py-2 px-4 text-center border-l border-dashed">{item.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4">
          <Button className="bg-[#5C6D3F] hover:bg-[#4A5A2F] text-[#FFFFFF]">
            Gerar PDF
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}