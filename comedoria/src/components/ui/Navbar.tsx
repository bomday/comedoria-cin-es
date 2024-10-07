"use client";

import Link from "next/link";
import Image from "next/image";
import { Logo } from "../../app/assets";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import "../../app/globals.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 w-full bg-background fixed top-0 left-0 z-50">
      <div className="flex items-center space-x-2">
        <Link href="/landing-page">
          <Image src={Logo} alt={"Logo"} className="w-36 h-auto ml-12" />
        </Link>
      </div>

      {/* Menu para telas maiores */}
      <div className="hidden md:flex">
        <Link href="/customer-login">
          <Button size="lg" variant="btnGreen" className="mr-2 rubik-600">
            Área do Cliente →
          </Button>
        </Link>
        <Link href="/staff-login">
          <Button size="lg" variant="btnWine" className="mr-12 rubik-600">
            Área do Funcionário →
          </Button>
        </Link>
      </div>

      {/* Ícone de menu para telas menores */}
      <div className="md:hidden">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Menu suspenso com transição */}
      <div
        className={`absolute top-16 left-0 w-full bg-background shadow-lg z-50 p-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link href="/customer-login">
            <Button
              size="md"
              variant="btnGreen"
              className="hover:bg-[#45480F] text-center w-40" // Define a largura fixa aqui
            >
              Área do Cliente →
            </Button>
          </Link>
          <Link href="/staff-login">
            <Button
              size="md"
              className="bg-[#FF6B6B] hover:bg-[#FF4D4D] text-center w-40" // Define a largura fixa aqui
            >
              Área do Funcionário →
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
