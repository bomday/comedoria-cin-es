"use client";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {Logo} from '../../app/assets'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white">
        <div className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt={"Logo"}
            className="w-36 h-auto ml-12"
          />
        </div>
      <div className="flex items-center justify-end space-x-4">
        <Button
          size='md'
          className="text-sm font-medium bg-[#FFFFFF] hover:bg-[#F0F0F0] text-gray-700 hover:text-gray-900"
          onClick={() => handleNavigation('/management/dashboard')} // como gerente ver as estatisticas
        >
          Gerenciamento
        </Button>
        <Button
          size='md'
          className="text-sm font-medium bg-[#FFFFFF] hover:bg-[#F0F0F0] text-gray-700 hover:text-gray-900"
          onClick={() => handleNavigation('/staff-products')} // como gerente ver o estoque
        >
          Estoque
        </Button>
        <Button
          size='md'
          className="text-sm font-medium bg-[#FFFFFF] hover:bg-[#F0F0F0] text-gray-700 hover:text-gray-900"
          onClick={() => handleNavigation('/staff-reservations')} // como gerente ver as reservas
        >
          Reservas
        </Button>
        <Button
          size='md'
          className="text-sm font-medium bg-[#FFFFFF] hover:bg-[#F0F0F0] text-gray-700 hover:text-gray-900"
          onClick={() => handleNavigation('/sales/sales-history')} // como gerente ver o historico de vendas
        >  
          Vendas
        </Button>
        <Button size="sm"
        onClick={() => handleNavigation('/landing-page')} // como gerente deslogar e ir para a pagina inicial
        >
          Sair
          <LogOut className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
}