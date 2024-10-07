"use client";

import { useState } from "react";
import { LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';
import { signOut } from "next-auth/react";
import { Logo } from "@/app/assets";

export default function NavbarLogged() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 w-full bg-background fixed top-0 left-0 z-50">
      
      <div className="flex items-center space-x-2 ml-12">
        <Link href="/landing-page">
          <Image src={Logo} alt="Logo" className="w-24 h-auto md:w-36" />
        </Link>
      </div>
    
      <div className="flex items-center rubik-600 justify-end space-x-4 mr-12">
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

      {/* Menu suspenso para telas pequenas */}
      <div
        className={` md:hidden flex flex-col p-4 bg-background shadow-lg z-50 items-center transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link href="/products">
          <Button size="md" variant="ghost" onClick={() => setIsOpen(false)}>
            Salgados
          </Button>
        </Link>
        <Link href="/customer-reservations">
          <Button size="md" variant="ghost" onClick={() => setIsOpen(false)}>
            Suas Reservas
          </Button>
        </Link>
        <Link href="/customer-account">
          <Button size="md" variant="ghost" onClick={() => setIsOpen(false)}>
            Sua Conta
          </Button>
        </Link>
        <Link href="/landing-page">
          <Button
            size="sm"
            className="bg-[#FF6B6B] hover:bg-[#FF4D4D]"
            onClick={() => setIsOpen(false)}
          >
            Sair
            <LogOut className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </nav>
  );
}