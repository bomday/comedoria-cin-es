import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface WeeklyData {
  dia: string
  turno: string
  data: string
  salgadosVendidos: number
}

interface WeeklyViewListProps {
  data: WeeklyData[]
}

export default function WeeklyViewList({ data }: WeeklyViewListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Dia</TableHead>
          <TableHead>Turno</TableHead>
          <TableHead>Data</TableHead>
          <TableHead className="text-right">Salgados Vendidos</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index} className={index % 2 === 0 ? "bg-muted" : ""}>
            <TableCell className="font-medium">{item.dia}</TableCell>
            <TableCell>{item.turno}</TableCell>
            <TableCell>{item.data}</TableCell>
            <TableCell className="text-right">{item.salgadosVendidos}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}