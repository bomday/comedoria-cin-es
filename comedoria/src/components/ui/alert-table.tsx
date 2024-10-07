import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface alertTable {
  isOpen: boolean
  onClose: () => void
}

const salgadosData = [
  { salgado: "Coxinha de Frango", data: "23/09/24", vendidos: 35 },
  { salgado: "Coxinha de Frango e Cheddar", data: "23/09/24", vendidos: 14 },
  { salgado: "Coxinha de Frango e Catupiry", data: "23/09/24", vendidos: 27 },
  { salgado: "Esfiha de Queijo", data: "23/09/24", vendidos: 64 },
  { salgado: "Esfiha de Frango e Cheddar", data: "23/09/24", vendidos: 37 },
  { salgado: "Esfiha de Frango e Catupiry", data: "23/09/24", vendidos: 18 },
  { salgado: "Empada de Frango", data: "23/09/24", vendidos: 29 },
]

export default function AlertModal({ isOpen, onClose }: alertTable) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[526.58px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Salgados Vendidos</DialogTitle>
        </DialogHeader>
        <div className="mt-4 max-h-[400px] overflow-y-auto">
          <table className="w-full border-collapse justify-center">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-center font-semibold">Salgado</th>
                <th className="py-2 px-4 text-center border-l border-r border-dashed font-semibold">Data</th>
                <th className="py-2 px-4 text-center font-semibold">Salgados Vendidos</th>
              </tr>
            </thead>
            <tbody>
              {salgadosData.map((item, index) => (
                <tr key={index} className="last:border-b-0">
                  <td className="py-2 px-4 text-center">{item.salgado}</td>
                  <td className="py-2 px-4 border-l border-dashed text ml-2 mr-2">{item.data}</td>
                  <td className="py-2 px-4 border-l border-dashed text-center">{item.vendidos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end">
        <Button className="w-[200px] text-center mt-4 bg-[#5C6D3F] hover:bg-[#4A5A2F] text-[#FFFFFF]">
          Gerar PDF
        </Button></div>
      </DialogContent>
    </Dialog>
  )
}