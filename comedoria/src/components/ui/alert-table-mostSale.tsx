import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface alertTable {
  isOpen: boolean
  onClose: () => void
}

const salgadosData = [
  { salgado: "Coxinha de Frango", vendidos: 35 },
  { salgado: "Coxinha de Frango e Cheddar", vendidos: 14 },
  { salgado: "Coxinha de Frango e Catupiry", vendidos: 27 },
  { salgado: "Esfiha de Queijo", vendidos: 64 },
  { salgado: "Esfiha de Frango e Cheddar", vendidos: 37 },
  { salgado: "Esfiha de Frango e Catupiry", vendidos: 18 },
  { salgado: "Empada de Frango", vendidos: 29 },
]

export default function MostSaleModal({ isOpen, onClose }: alertTable) {
    
  const sortedSalgadosData = [...salgadosData].sort((a, b) => b.vendidos - a.vendidos)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[526.58px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Salgado Favorito</DialogTitle>
        </DialogHeader>
        <div className="mt-4 max-h-[400px] overflow-y-auto">
          <table className="w-full border-collapse justify-center">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-center font-semibold">Salgado</th>
                <th className="py-2 text-center border-l border-dashed font-semibold">Salgados Vendidos</th>
              </tr>
            </thead>
            <tbody>
              {sortedSalgadosData.map((item, index) => (
                <tr key={index} className="last:border-b-0">
                  <td className="py-2 text-center">{item.salgado}</td>
                  <td className="py-2 border-l border-dashed text-center">{item.vendidos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <Button className="w-full text-center mt-4 bg-[#5C6D3F] hover:bg-[#4A5A2F] text-[#FFFFFF]">
            Gerar PDF
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
