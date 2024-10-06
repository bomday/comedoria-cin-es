"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '../../app/assets';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from 'react';
import "../../app/globals.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          variant="btnSocialMedia"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Menu suspenso para telas menores */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-48 bg-background shadow-lg rounded-md z-10">
          <Link href="/customer-login">
            <Button size="lg" variant="btnGreen" className="w-full text-left rubik-600" onClick={() => setIsOpen(false)}>
              Área do Cliente →
            </Button>;
          </Link>
          <Link href="/staff-login">
            <Button size="lg" variant="btnWine" className="w-full text-left rubik-600" onClick={() => setIsOpen(false)}>
              Área do Funcionário →
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}