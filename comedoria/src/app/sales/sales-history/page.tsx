import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function SalesHistory() {
  const salesData = [
    {
      salgados: "Estilo de Frango Cheddar + Costela de Frango",
      vendedor: "Maria Antonia",
      cliente: "Jose Gabriel",
      tipo: "Reservado",
      dataHora: "23/09/24 17:38",
      valor: "R$ 12,00"
    },
  ]


  return (
    <div className="p-6 bg-white">      
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#45480F]">Vendas</h1>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium mb-2 text-[#556B2F]">Histórico</h2>
        <Button className="bg-[#556B2F] text-white hover:bg-[#4c6129]">
          Gerar PDF
        </Button>        
      </div>
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="border-dashed border-b border-r p-1 text-center text-black">salgados</TableHead>
              <TableHead className="border-dashed border-b border-r p-1 text-center text-black">Vendedor</TableHead>
              <TableHead className="border-dashed border-b border-r p-1 text-center text-black">Cliente</TableHead>
              <TableHead className="border-dashed border-b border-r p-1 text-center text-black">Tipo</TableHead>
              <TableHead className="border-dashed border-b border-r p-1 text-center text-black">Data / Hora</TableHead>
              <TableHead className="border-dashed border-b p-1 text-center text-black">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salesData.map((sale, index) => (
              <TableRow key={index}>
                <TableCell className="border-dashed border-r p-1 text-left">{sale.salgados}</TableCell>
                <TableCell className="border-dashed border-r p-1 text-left">{sale.vendedor}</TableCell>
                <TableCell className="border-dashed border-r p-1 text-left">{sale.cliente}</TableCell>
                <TableCell className="border-dashed border-r p-1 text-center">{sale.tipo}</TableCell>
                <TableCell className="border-dashed border-r p-1 text-center">{sale.dataHora}</TableCell>
                <TableCell className="p-1 text-right">{sale.valor}</TableCell>
              </TableRow >
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}