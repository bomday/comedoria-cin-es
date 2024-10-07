"use client";

import { Button } from "@/components/ui/button";
import NavbarLogged from "@/components/ui/Navbar-logged";
import Footer from "@/components/ui/footer";
import PriceBanner from "@/components/ui/price-banner";
import { useRouter } from "next/navigation";
import { Suspense } from "react"; // Importando Suspense
import { CartContent } from "./sections/cartContent/cartContent";
import AuthenticationError from "@/app/(errors)/authentication-error/authentication-error";
import Loading from "@/app/(errors)/loading/loading";
import { useSession } from 'next-auth/react'
import { useCart } from "./sections/useCartHook/useCart";
import { useSearchParams } from 'next/navigation';

const FinalizeReservation = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { cartItems, calculateTotal } = useCart(); // Hook useCart agora é chamado diretamente no componente

  if (status === "loading") {
    return <Loading/>
  }

  if (status === "unauthenticated") {
    return <AuthenticationError/>
  }

  // Só tenta acessar o usuário quando a sessão estiver autenticada
  const user = session?.user

  const getShift = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
  
    if (hours < 12 || (hours === 12 && minutes === 0)) {
      return 'morning'; // De 00:01 até 12:00
    } else {
      return 'afternoon'; // De 12:01 até 00:00
    }
  };

  const handleReservation = async () => {
    try {
      if (!user?.email) {
        throw new Error('User email not available');
      }
  
      // Faz uma requisição para buscar o cliente pelo e-mail da sessão
      const customerResponse = await fetch(`/api/customer?email=${user.email}`);
      if (!customerResponse.ok) {
        throw new Error('Failed to fetch customer details');
      }
  
      const customerData = await customerResponse.json();
      const customerId = customerData._id; // Supondo que o ID do cliente é retornado como _id
  
      // Prepare o corpo da requisição com os dados da reserva
      const reservationData = {
        customer: customerId, // Usa o id do usuário logado
        order: cartItems.map(item => ({
          product_name: item.product_name,
          quantity_products: item.quantity,
        })), // Mapeia os itens do carrinho
        shift: getShift(), // Determina o turno dinamicamente
      };

      // Faz o POST da reserva para a API
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (!response.ok) {
        throw new Error('Failed to create reservation');
      }

      // Atualiza o estoque de cada item no inventário
      for (const item of cartItems) {
        const updatedStock = item.stock - item.quantity;
        if (updatedStock < 0) {
          throw new Error(`Not enough stock for product: ${item.product_name}`);
        }

        const updateResponse = await fetch(`/api/inventory?product_name=${item.product_name}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ stock: updatedStock }),
        });

        if (!updateResponse.ok) {
          throw new Error(`Failed to update stock for product: ${item.product_name}`);
        }
      }

      // Redireciona após o sucesso
      router.replace('/customer-reservations?showAlert=true');
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  }; 

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="rubik-400 flex flex-col min-h-screen">
        <NavbarLogged />
        <div className="mt-16"> 
          <PriceBanner />
        </div>
        <main className="flex-grow container mx-auto px-16 py-8">
          <h2 className="rubik-700 text-4xl font-bold text-foreground mb-8 text-left">
            Finalize sua reserva
          </h2>
          
          <CartContent /> {/* Agora o conteúdo do carrinho está encapsulado no Suspense */}
          
          <div className="flex justify-center">
            <Button
              variant="btnBrown"
              className="rubik-600 w-full md:w-[420px] h-[64px]"
              onClick={handleReservation}
            >
              Fazer Reserva
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
};

export default FinalizeReservation;