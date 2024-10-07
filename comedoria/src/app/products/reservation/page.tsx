"use client";

import { Button } from "@/components/ui/button";
import NavbarLogged from "@/components/ui/Navbar-logged";
import Footer from "@/components/ui/footer";
import PriceBanner from "@/components/ui/price-banner";
import { useRouter } from "next/navigation";
import CartItemDisplay from "./sections/CartItemDisplay/cartItemDisplay";
import TotalDisplay from "./sections/TotalDisplay/totalDisplay";
import { useCart } from "./sections/useCartHook/useCart";
import { Suspense } from "react"; // Importando Suspense

const FinalizeReservation = () => {
  const { cartItems, calculateTotal } = useCart();
  const router = useRouter();

  const handleReservation = () => {
    router.replace('/customer-reservations?showAlert=true');
  };

  return (
    <div className="rubik-400 flex flex-col min-h-screen">
      <NavbarLogged />
      <div className="mt-16"> 
        <PriceBanner />
      </div>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="rubik-700 text-4xl font-bold text-[#45480F] mb-8 sm:text-left">
          Finalize sua reserva
        </h2>
        <Suspense fallback={<div>Loading...</div>}> {/* Boundary de Suspense */}
          {cartItems.length > 0 ? (
            <div className="flex flex-col mx-auto max-w-full md:max-w-[640px]">
              <div className="space-y-4 mb-4">
                {cartItems.map(item => (
                  <CartItemDisplay key={item.product_name} item={item} />
                ))}
              </div>
              <TotalDisplay total={calculateTotal()} />
              <p className="text-center text-sm text-gray-600 mb-6">
                Seu pedido ficará reservado até as 17:00
              </p>
              <div className="flex justify-center">
                <Button
                  variant="btnBrown"
                  className="rubik-600 w-full md:w-[420px] h-[64px]"
                  onClick={handleReservation}
                >
                  Fazer Reserva
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600">Seu carrinho está vazio.</p>
          )}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default FinalizeReservation;
