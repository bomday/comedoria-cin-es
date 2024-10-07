"use client";

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BarChart2, Users, ShoppingBag, Users as ClientsIcon, Menu, Home, Settings, HelpCircle, LogOut } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeButton, setActiveButton] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const mainButtons = [
    { name: 'Estatísticas', icon: BarChart2, path: '/management/dashboard' },
    { name: 'Funcionários', icon: Users, path: '/management/staff' },
    { name: 'Produtos', icon: ShoppingBag, path: '/management/products' },
    { name: 'Clientes', icon: ClientsIcon, path: '/management/customers' },
  ];

  const additionalButtons = [
    { name: 'Estoque', icon: Home, path: '/inventory' },
    { name: 'Reservas', icon: Settings, path: '/staff-reservations' },
    { name: 'Vendas', icon: HelpCircle, path: '/sales' },
    { name: 'Sair', icon: LogOut, path: '/landing-page' },
  ];

  useEffect(() => {
    const currentPath = [...mainButtons, ...additionalButtons].find(button => pathname.startsWith(button.path));
    if (currentPath) {
      setActiveButton(currentPath.name);
    }
  }, [pathname]);

  const handleClick = (path: string, name: string) => {
    router.push(path);
    setActiveButton(name);
    setIsOpen(false);
  };

  const renderButtons = (buttons: typeof mainButtons) => (
    <nav className="space-y-2">
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
  );

  return (
    <>
      {/* Sidebar para telas grandes */}
      <aside className="hidden lg:block w-64 bg-white  h-full pt-6">
        <div className="p-4">
          {renderButtons(mainButtons)}
        </div>
      </aside>

      {/* Botão de menu e Sheet para telas pequenas */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="fixed top-4 right-4 z-50">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 pt-16">
            <div className="space-y-6">
              {renderButtons(additionalButtons)}
              <div className="h-px bg-gray-200" />
              {renderButtons(mainButtons)}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}