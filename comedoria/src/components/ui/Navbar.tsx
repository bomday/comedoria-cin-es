import { Button } from "@/components/ui/button"
import { Pizza } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white w-full">
      <div className="flex items-center">
        <Pizza className="w-6 h-6 text-[#8B1A1A] mr-2" />
        <div className="text-[#8B1A1A] text-2xl font-bold">Comedoria</div>
      </div>
      <div>
        <Button variant="outline" className="mr-2">Área do Cliente</Button>
        <Button>Área do Funcionário →</Button>
      </div>
    </nav>
  )
}