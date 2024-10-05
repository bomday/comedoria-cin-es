import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {Logo} from '../../app/assets';
import Image from "next/image";
import Link from 'next/link';

export default function NavbarStaff() {

  return (
    <nav className="flex justify-between items-center p-4 w-full bg-background fixed top-0 left-0 z-50">
        <div className="flex items-center space-x-2">
          <Link href="/landing-page">
            <Image
              src={Logo}
              alt={"Logo"}
              className="w-36 h-auto ml-12"
            />
          </Link>
        </div>
      <div className="flex items-center rubik-600 justify-end space-x-4">
        <Link href="/staff-products">
          <Button
            size='md'
            variant='btnSocialMedia'>
            Estoque
          </Button>
        </Link>
        <Link href="/staff-reservations">
          <Button
            size='md'
            variant='btnSocialMedia'>
            Reservas
          </Button>
        </Link>
        <Link href="/sales/sales-history">
          <Button
            size='md'
            variant='btnSocialMedia'>
            Vendas
          </Button>
        </Link>
        <Link href="/staff-login">
          <Button size="sm" className="bg-[#FF6B6B] hover:bg-[#FF4D4D]">
            Sair
            <LogOut className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </nav>
  );
}
