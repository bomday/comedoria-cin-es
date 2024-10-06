"use client";

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { BarChart2, Users, ShoppingBag, Users as ClientsIcon } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeButton, setActiveButton] = useState('');

  const buttons = [
    { name: 'Estatísticas', icon: BarChart2, path: '/management/dashboard' },
    { name: 'Funcionários', icon: Users, path: '/management/staff' },
    { name: 'Produtos', icon: ShoppingBag, path: '/management/products' },
    { name: 'Clientes', icon: ClientsIcon, path: '/management/customers' },
  ];

  useEffect(() => {
    const currentPath = buttons.find(button => pathname.startsWith(button.path));
    if (currentPath) {
      setActiveButton(currentPath.name);
    }
  }, [pathname]);

  const handleClick = (path: string, name: string) => {
    router.push(path);
    setActiveButton(name);
  };

  return (
    <aside className="w-64 bg-white shadow-md h-full pt-6">
      <nav className="p-4 space-y-2">
        {buttons.map((button) => {
          const Icon = button.icon;
          const isActive = activeButton === button.name;
          return (
            <Button
              key={button.name}
              variant="ghost"
              className={`w-full justify-start text-xl py-2 px-4 transition-all duration-200 ease-in-out ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'hover:bg-primary/10'
              }`}
              onClick={() => handleClick(button.path, button.name)}
            >
              <Icon className={`mr-2 h-5 w-5 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
              {button.name}
            </Button>
          );
        })}
      </nav>
    </aside>
  );
}