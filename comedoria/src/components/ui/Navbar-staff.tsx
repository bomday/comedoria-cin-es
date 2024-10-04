"use client";

import { useRouter } from "next/navigation";
import { useState } from 'react'
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logozinhoImage from "../../../public/assets/logo_icon.png";
import Link from 'next/link'

export default function Navbar() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("");

  const handleNavigation = (path: string) => {
    setActiveButton(path);
    router.push(path);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white">
        <div className="flex items-center space-x-2">
          <Image
            src={logozinhoImage}
            alt="Comedoria Logo"
            width={50}
            height={12}
            className="h-auto max-h-[2.5rem] mr-2"
          />
          <Link href="/landing-page">
            <div className="text-xl font-semibold">Comedoria</div>
          </Link>
        </div>
      <div className="flex items-center justify-end space-x-4">
        <Button
          variant="ghost"
          className={`text-sm font-medium bg-[#FFFFFF] hover:bg-[#F0F0F0] text-gray-700 hover:text-gray-900 ${activeButton === "/staff-products" ? "shadow-md" : ""}`}
          onClick={() => handleNavigation("/staff-products")}
        >
          Estoque
        </Button>
        <Button
          className={`text-sm font-medium bg-[#FFFFFF] hover:bg-[#F0F0F0] text-gray-700 hover:text-gray-900 ${activeButton === "/staff-reservations" ? "shadow-md" : ""}`}
          onClick={() => handleNavigation("/staff-reservations")}
        >
          Reservas
        </Button>
        <Button
          className={`text-sm font-medium bg-[#FFFFFF] hover:bg-[#F0F0F0] text-gray-700 hover:text-gray-900 ${activeButton === "/sales/sales-history" ? "shadow-md" : ""}`}
          onClick={() => handleNavigation("/sales/sales-history")}
        >
          Vendas
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => router.push("/staff-login")}
        >
          Sair
          <LogOut className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
}
