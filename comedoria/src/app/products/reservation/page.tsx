"use client";

import { Button } from "@/components/ui/button";
import NavbarLogged from "@/components/ui/Navbar-logged";
import Footer from "@/components/ui/footer";
import PriceBanner from "@/components/ui/price-banner";
import { useRouter } from "next/navigation";
import CartItemDisplay from "./sections/CartItemDisplay/page";
import TotalDisplay from "./sections/TotalDisplay/page";
import { useCart } from "./sections/useCartHook/page";

const FinalizeReservation = () => {
  const { cartItems, calculateTotal } = useCart();
  const router = useRouter();

  const handleReservation = () => {
    router.replace('/customer-reservations?showAlert=true');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarLogged />
      <div className="mt-16"> 
        <PriceBanner />
      </div>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="rubik-700 text-4xl font-bold text-[#45480F]  mb-8 sm:text-left">
          Finalize sua reserva
        </h2>
        {cartItems.length > 0 ? (
          <div className="flex flex-col mx-auto max-w-full md:max-w-[640px]">
            <div className="space-y-4 mb-4">
              {cartItems.map(item => (
                <CartItemDisplay key={item.id} item={item} />
              ))}
            </div>
            <TotalDisplay total={calculateTotal()} />
            <p className="text-center text-sm text-gray-600 mb-6">
              Seu pedido ficará reservado até as 17:00
            </p>
            <div className="flex justify-center">
              <Button
                className="w-full md:w-[420px] h-[64px] bg-[rgba(var(--brown-button))] hover:bg-[rgba(var(--brown-hover))] text-[#FFFFFF] text-lg font-semibold font-inter"
                onClick={handleReservation}
              >
                Fazer Reserva
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Seu carrinho está vazio.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default FinalizeReservation;
