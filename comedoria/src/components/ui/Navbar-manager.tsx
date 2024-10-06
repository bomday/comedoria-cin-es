"use client"

import { useState } from 'react';
import { LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Logo } from '../../app/assets';
import Link from 'next/link';
import "@/app/globals.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Link href="/landing-page">
            <Image
              src={Logo}
              alt={"Logo"}
              className="w-24 h-auto md:w-36 ml-4"
            />
          </Link>
        </div>

        {/* Botão de menu para telas pequenas */}
        <div className="md:hidden">
          <Button 
            size="sm" 
            variant='btnSocialMedia'
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Menu normal para telas maiores */}
        <div className="hidden md:flex items-center rubik-600 justify-end space-x-4">
          <Button size='md' variant='btnSocialMedia'>Gerenciamento</Button>
          <Button size='md' variant='btnSocialMedia'>Estoque</Button>
          <Button size='md' variant='btnSocialMedia'>Reservas</Button>
          <Button size='md' variant='btnSocialMedia'>Vendas</Button>
          <Button size="sm" className="bg-[#FF6B6B] hover:bg-[#FF4D4D]">
            Sair
            <LogOut className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Menu suspenso para telas pequenas */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4">
          <Button size='md' variant='btnSocialMedia' onClick={() => setIsOpen(false)}>Gerenciamento</Button>
          <Button size='md' variant='btnSocialMedia' onClick={() => setIsOpen(false)}>Estoque</Button>
          <Button size='md' variant='btnSocialMedia' onClick={() => setIsOpen(false)}>Reservas</Button>
          <Button size='md' variant='btnSocialMedia' onClick={() => setIsOpen(false)}>Vendas</Button>
          <Button size="sm" className="bg-[#FF6B6B] hover:bg-[#FF4D4D]" onClick={() => setIsOpen(false)}>
            Sair
            <LogOut className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </nav>
  );
}
