"use client"

import { useState } from 'react';
import { LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Logo } from '../../app/assets';
import Link from 'next/link';
import "@/app/globals.css";

export default function NavbarStaff() {
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
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Menu normal para telas maiores */}
        <div className="hidden md:flex items-center rubik-600 justify-end space-x-4">
          <Link href="/staff-products"> 
            <Button size='md' variant="outline">Estoque</Button>
          </Link>
          <Link href="/staff-reservations"> 
            <Button size='md' variant="outline">Reservas</Button>
          </Link>
          <Link href="/sales/sales-history"> 
            <Button size='md' variant="outline">Vendas</Button>
          </Link>
          <Link href="/landing-page"> 
            <Button size="sm" className="bg-[#FF6B6B] hover:bg-[#FF4D4D]">
              Sair
              <LogOut className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Menu suspenso para telas pequenas */}
      <div
        className={` md:hidden flex flex-col p-4 bg-background shadow-lg z-50 items-center transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
          <Link href="/staff-products">
            <Button size="md" variant="ghost" onClick={() => setIsOpen(false)}>
              Estoque
            </Button>
          </Link>
          <Link href="/staff-reservations">
            <Button size="md" variant="ghost" onClick={() => setIsOpen(false)}>
              Reservas
            </Button>
          </Link>
          <Link href="/sales/sales-history">
            <Button size="md" variant="ghost" onClick={() => setIsOpen(false)}>
              Vendas
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
