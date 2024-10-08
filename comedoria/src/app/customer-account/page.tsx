'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import NavbarLogged from '@/components/ui/Navbar-logged'
import PriceBanner from '@/components/ui/price-banner'
import ButtonGroup from './sections/buttonGroup/page'
import ConfirmationModal from '@/components/ui/confirmation-modal';
import { useState } from 'react';
import Footer from "@/components/ui/footer";

export default function UserAccount() {
  const [EditIsOpen, EditSetIsOpen] = useState(false);

  const handleOpen = () => EditSetIsOpen(true);
  const handleClose = () => EditSetIsOpen(false);

  const handleConfirm = () => {
      EditSetIsOpen(false); // Fecha o modal após a confirmação
  };

  return (
    <div className="rubik-400 flex flex-col h-screen bg-background text-foreground">
      <NavbarLogged />
      <div className="mt-16"> 
        <PriceBanner/>
        <h1 className="advent-pro-700 text-lg-smtitle font-bold p-4 pb-2 text-secondary ml-12">Sua conta</h1>
      </div>

      <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-start space-x-6 mb-6">
          <div className="relative">
            <Avatar className="advent-pro-700 w-48 h-48 border-2 border-border rounded-full overflow-hidden" style={{ borderRadius: '50%' }}>
              <AvatarImage src="/placeholder.svg" alt="Fulano Ciclano"/>
              <AvatarFallback>FC</AvatarFallback>
            </Avatar>
            <Button variant={null} className="absolute bottom-0 right-0 bg-transparent p-2 ">
              <CirclePlus className="text-foreground"/>
            </Button>
          </div>
          <div className="advent-pro-600 flex-grow">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold">Fulano Ciclano</h2>
              <p className="text-gray-600">fulanociclano@mail.com</p>
            </div>
            <ButtonGroup/>
          </div>
        </div>

        <Button onClick={handleOpen} className="rubik-600 w-full bg-destructive hover:bg-destructive/90 text-white py-3 h-14 md:h-16" style={{color:'white'}}>
          Excluir conta
        </Button>
      </div>

      <ConfirmationModal
        isOpen={EditIsOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Confirmação Necessária"
        confirmText="Confirmar"
        cancelText="Cancelar"
        description="Tem certeza de que deseja excluir sua conta?"
      />
      <Footer />
    </div>
  );
}