import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {Logo} from '../../app/assets';
import Image from "next/image";
import Link from 'next/link';
import { signOut } from "next-auth/react";

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
        <Link href="/products">
          <Button
            size='md'
            variant='btnNav'>
            Salgados
          </Button>
        </Link>
        <Link href="/customer-reservations">
          <Button
            size='md'
            variant='btnNav'>
            Suas Reservas
          </Button>
        </Link>
        <Link href="/customer-account">
          <Button
            size='md'
            variant='btnNav'>
            Sua Conta
          </Button>
        </Link>
        <Button size="sm" className="bg-[#FF6B6B] hover:bg-[#FF4D4D]" onClick={() => signOut({ callbackUrl: '/landing-page' })}>
          Sair
          <LogOut className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
}