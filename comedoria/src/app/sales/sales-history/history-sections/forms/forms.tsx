import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SalesHistory() {
  const salesData = [
    { salgados: "Esfiha de Frango Cheddar + Coxinha de Frango", vendedor: "Maria Antonia", cliente: "Jose Gabriel", tipo: "Reservado", dataHora: "23/09/24 17:38", valor: "R$ 12,00" },
    { salgados: "Quibe + Pão de Queijo", vendedor: "Maria Antonia", cliente: "Ana Luiza", tipo: "Finalizado", dataHora: "24/09/24 09:15", valor: "R$ 10,00" },
    { salgados: "Esfiha de Calabresa + Pastel de Carne", vendedor: "Maria Antonia", cliente: "Carlos Eduardo", tipo: "Cancelado", dataHora: "24/09/24 11:45", valor: "R$ 15,00" },
    { salgados: "Coxinha de Frango + Enroladinho de Salsicha", vendedor: "Maria Antonia", cliente: "Mariana Farias", tipo: "Reservado", dataHora: "24/09/24 12:30", valor: "R$ 8,50" },
    { salgados: "Esfiha de Queijo + Pão de Batata Recheado", vendedor: "Maria Antonia", cliente: "Bruno Lopes", tipo: "Finalizado", dataHora: "24/09/24 13:10", valor: "R$ 11,00" },
    { salgados: "Pastel de Queijo + Empada de Frango", vendedor: "Maria Antonia", cliente: "Felipe Alves", tipo: "Em Preparo", dataHora: "24/09/24 14:50", valor: "R$ 9,00" },
    { salgados: "Esfiha de Carne + Enroladinho de Presunto e Queijo", vendedor: "Maria Antonia", cliente: "Lucas Santana", tipo: "Finalizado", dataHora: "24/09/24 16:20", valor: "R$ 13,50" },
    { salgados: "Coxinha de Frango + Pastel de Queijo", vendedor: "Maria Antonia", cliente: "Gabriela Santos", tipo: "Cancelado", dataHora: "24/09/24 17:00", valor: "R$ 9,50" },
    { salgados: "Esfiha de Calabresa + Pastel de Frango", vendedor: "Maria Antonia", cliente: "Thiago Costa", tipo: "Reservado", dataHora: "24/09/24 17:25", valor: "R$ 14,00" },
    { salgados: "Quibe + Esfiha de Queijo", vendedor: "Maria Antonia", cliente: "Rafael Martins", tipo: "Finalizado", dataHora: "24/09/24 18:05", valor: "R$ 12,50" },
  ];

  return (
    <section className="mt-2">
      <div className="flex flex-col items-start px-4 lg:px-20 py-6 lg:py-10 bg-white">
      <div className="w-full max-w-screen-xl mx-auto mt-8">
      <h1 className="text-4xl lg:text-5xl font-bold text-[#45480F] mb-4">Vendas</h1>
      <div className="flex justify-between items-center w-full mb-6">
      <h2 className="text-2xl lg:text-3xl font-semibold text-black">Histórico</h2>
            <Button variant="btnGreen" className="text-beige w-full lg:w-auto">
              Gerar PDF
            </Button>
          </div>
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="border-dashed border-r p-1 text-center text-black">Salgados</TableHead>
                  <TableHead className="border-dashed border-r p-1 text-center text-black">Vendedor</TableHead>
                  <TableHead className="border-dashed border-r p-1 text-center text-black">Cliente</TableHead>
                  <TableHead className="border-dashed border-r p-1 text-center text-black">Tipo</TableHead>
                  <TableHead className="border-dashed border-r p-1 text-center text-black">Data / Hora</TableHead>
                  <TableHead className="border-dashed p-1 text-center text-black">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salesData.map((sale, index) => (
                  <TableRow key={index}>
                    <TableCell className="border-dashed border-r p-1 text-center">{sale.salgados}</TableCell>
                    <TableCell className="border-dashed border-r p-1 text-center">{sale.vendedor}</TableCell>
                    <TableCell className="border-dashed border-r p-1 text-center">{sale.cliente}</TableCell>
                    <TableCell className="border-dashed border-r p-1 text-center">{sale.tipo}</TableCell>
                    <TableCell className="border-dashed border-r p-1 text-center">{sale.dataHora}</TableCell>
                    <TableCell className="p-1 text-center">{sale.valor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  )
}