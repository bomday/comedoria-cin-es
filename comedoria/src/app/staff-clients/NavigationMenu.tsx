import React from 'react';

const NavigationMenu: React.FC = () => {
  const menuItems = [
    { id: 1, label: 'Estatisticas' },
    { id: 2, label: 'Funcionários' },
    { id: 3, label: 'Produtos' },
    { id: 4, label: 'Clientes', active: true },
  ];

  return (
    <nav className="flex flex-col p-2 text-4xl font-medium tracking-tighter leading-none text-black whitespace-nowrap w-[220px]">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`gap-4 self-stretch px-4 mt-2 max-w-full rounded-xl border-b border-black border-opacity-20 w-[202px] ${
            item.active ? 'bg-white bg-opacity-70 shadow-[2px_2px_2px_rgba(0,0,0,0.25)]' : ''
          }`}
        >
          {item.label}
        </div>
      ))}
    </nav>
  );
};

export default NavigationMenu;