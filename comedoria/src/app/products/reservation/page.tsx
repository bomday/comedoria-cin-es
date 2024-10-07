"use client";

import { Button } from "@/components/ui/button";
import NavbarLogged from "@/components/ui/Navbar-logged";
import Footer from "@/components/ui/footer";
import PriceBanner from "@/components/ui/price-banner";
import { useRouter } from "next/navigation";
import { Suspense } from "react"; // Importando Suspense
import { useSearchParams } from "next/navigation"; // Importando useSearchParams
import { CartContent } from "./sections/cartContent/cartContent";

const FinalizeReservation = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Aqui você usa useSearchParams

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
          <CartContent /> {/* Agora o conteúdo do carrinho está encapsulado no Suspense */}
        </Suspense>
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
  );
};

export default FinalizeReservation;