import { Button } from "@/components/ui/button"
import Image from 'next/image'
import {Logo} from '../../app/assets'
import { ArrowRight } from 'lucide-react'

export default function NavbarLogged() {
  
  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-white w-full border-b border-gray-200">
      <div className="flex items-center">
        <Image
          src={Logo}
          alt={"Logo"}
          className="w-36 h-auto ml-12"
        />
        <div className="text-black text-2xl font-semibold">Comedoria</div>
      </div>
      <div className="flex items-center space-x-4">
        <Button className="text-gray-600 hover:text-black">Salgados</Button>
        <Button className="text-gray-600 hover:text-black">Suas Reservas</Button>
        <Button className="text-gray-600 hover:text-black">Sua Conta</Button>
        <Button className="text-[#FF6B6B] hover-red-600 text-[#FFFFFF]">
          Sair <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </nav>
  )
}