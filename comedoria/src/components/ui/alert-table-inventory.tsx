import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface alertTable {
  isOpen: boolean
  onClose: () => void
}

const sugestion = [
  { salgado: "Coxinha de Frango", quantidade: 10 },
  { salgado: "Coxinha de Frango e Cheddar", quantidade: 15 },
  { salgado: "Coxinha de Frango e Catupiry", quantidade: 5 },
  { salgado: "Esfiha de Queijo", quantidade: 8 },
  { salgado: "Esfiha de Frango e Cheddar", quantidade: 4 },
  { salgado: "Esfiha de Frango e Catupiry", quantidade: 12 },
  { salgado: "Empada de Frango", quantidade: 8 },
]

export default function MostSaleModal({ isOpen, onClose }: alertTable) {

    const sortedSugestion = [...sugestion].sort((a, b) => b.quantidade - a.quantidade)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[526.58px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Sugestão de Estoque</DialogTitle>
        </DialogHeader>
        <div className="mt-4 max-h-[400px] overflow-y-auto">
          <table className="w-full border-collapse justify-center">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-center font-semibold">Salgado</th>
                <th className="py-2 text-center border-l border-dashed font-semibold">Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {sortedSugestion.map((item, index) => (
                <tr key={index} className="last:border-b-0">
                  <td className="py-2 text-center">{item.salgado}</td>
                  <td className="py-2 border-l border-dashed text-center">{item.quantidade}</td>
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
