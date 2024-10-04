import { Button } from "@/components/ui/button"
import Image from 'next/image'
import logozinhoImage from '../../../public/assets/logo_icon.png'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white w-full">
      <div className="flex items-center">
        <Image
          src={logozinhoImage}
          alt="Comedoria Logo"
          width={50} 
          height={12} 
          className="h-auto max-h-[2.5rem] mr-2"
        />
        <div className="text-[#000000] text-3xl font-bold">Comedoria</div>
      </div>
      <div>
        <Button variant="outline" className="mr-2">Área do Cliente</Button>
        <Button>Área do Funcionário →</Button>
      </div>
    </nav>
  )
}