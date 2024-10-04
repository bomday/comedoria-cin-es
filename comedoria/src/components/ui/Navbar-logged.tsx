import { Button } from "@/components/ui/button"
import Image from 'next/image'
import logozinho from '../../app/assets/images/logo_icon.png'
import { ArrowRight } from 'lucide-react'

export default function NavbarLogged() {
  
  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-white w-full border-b border-gray-200">
      <div className="flex items-center">
        <Image
          src={logozinho}
          alt="Comedoria Logo"
          width={40} 
          height={40} 
          style={{ objectFit: 'cover' }}
          className="h-10 w-auto mr-2"
        />
        <div className="text-black text-2xl font-semibold">Comedoria</div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-gray-600 hover:text-black">Salgados</Button>
        <Button variant="ghost" className="text-gray-600 hover:text-black">Suas Reservas</Button>
        <Button variant="ghost" className="text-gray-600 hover:text-black">Sua Conta</Button>
        <Button variant="destructive" className="text-[#FF6B6B] hover-red-600 text-[#FFFFFF]">
          Sair <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </nav>
  )
}