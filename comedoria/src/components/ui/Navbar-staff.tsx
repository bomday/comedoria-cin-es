import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {Logo} from '../../app/assets'
import Link from 'next/link'

export default function Navbar() {

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white">
        <div className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt={"Logo"}
            className="w-36 h-auto ml-12"
          />
          <Link href="/landing-page">
            <div className="text-xl font-semibold">Comedoria</div>
          </Link>
        </div>
      <div className="flex items-center justify-end space-x-4">
        <Button
          size='md'
          className="text-sm font-medium bg-[#FFFFFF] hover:bg-[#F0F0F0] text-gray-700 hover:text-gray-900">
          Estoque
        </Button>
        <Button
          size='md'
          className="text-sm font-medium bg-[#FFFFFF] hover:bg-[#F0F0F0] text-gray-700 hover:text-gray-900">
          Reservas
        </Button>
        <Button
          size='md'
          className="text-sm font-medium bg-[#FFFFFF] hover:bg-[#F0F0F0] text-gray-700 hover:text-gray-900">
          Vendas
        </Button>
        <Button size="sm">
          Sair
          <LogOut className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
}
