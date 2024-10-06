"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { BarChart2, Users, ShoppingBag, Users as ClientsIcon } from "lucide-react"

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeButton, setActiveButton] = useState('');

  const buttons = [
    { name: 'Estatísticas', icon: BarChart2, path: 'dashboard' },
    { name: 'Funcionários', icon: Users, path: 'staff' },
    { name: 'Produtos', icon: ShoppingBag, path:'products' },
    { name: 'Clientes', icon: ClientsIcon, path: 'customers' },
  ];

  useEffect(() => {
    const currentPath = buttons.find(button => button.path === pathname);
    if (currentPath) {
      setActiveButton(currentPath.name);
    }
  }, [pathname]);

  return (
    <aside className="w-64 bg-white shadow-md h-full pt-6">
      <nav className="p-4 space-y-2">
        {buttons.map((button) => {
          const Icon = button.icon;
          return (
            <Link href={button.path} key={button.name} passHref>
              <Button
                variant="ghost"
                className={`w-full justify-start text-xl py-2 px-4 transition-all duration-200 ease-in-out ${
                  activeButton === button.name
                    ? 'shadow-md bg-gray-100'
                    : 'hover:bg-gray-50'
                }`}
              >
                <Icon className="mr-2 h-5 w-5" />
                {button.name}
              </Button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}