"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { BarChart2, Users, ShoppingBag, Users as ClientsIcon } from "lucide-react"

export default function Sidebar() {
  const [activeButton, setActiveButton] = useState('Estatísticas');

  const buttons = [
    { name: 'Estatísticas', icon: BarChart2 },
    { name: 'Funcionários', icon: Users },
    { name: 'Produtos', icon: ShoppingBag },
    { name: 'Clientes', icon: ClientsIcon },
  ];

  return (
    <aside className="w-64 bg-white shadow-md h-full pt-6">
      <nav className="p-4 space-y-2">
        {buttons.map((button) => {
          const Icon = button.icon;
          return (
            <Button
              key={button.name}
              variant="ghost"
              className={`w-full justify-start text-xl py-2 px-4 transition-all duration-200 ease-in-out ${
                activeButton === button.name
                  ? 'shadow-md bg-gray-100'
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => setActiveButton(button.name)}
            >
              <Icon className="mr-2 h-5 w-5" />
              {button.name}
            </Button>
          );
        })}
      </nav>
    </aside>
  );
}