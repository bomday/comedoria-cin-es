'use client';
import Image from 'next/image'
import {CoxinhaBackground} from '@/app/assets/index'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import "@/app/globals.css"

export default function Banner() {
  const router = useRouter();
  const handleCustomerClick = () => {
    router.push('/customer-login');
  };

  return (
    <section style={{ height: '100vh', maxHeight: '100vh' }} className="relative sm:max-h-[80vh] md:h-[100vh]">
        <Image
          src={CoxinhaBackground}
          alt="Coxinhas fritas"
          layout="fill"
          objectFit="cover"
          className="z-0 pt-16"
        />
        <div className="absolute inset-0 z-10">
          <div className="flex flex-col justify-center h-full px-4 sm:items-center sm:px-8 md:pl-12 lg:pl-16 lg:items-start">
            <h1 className="advent-pro-700 text-beige text-4xl sm:text-5xl sm:text-center md:text-lg-title md:text-left">Comedoria</h1>
            <p className="advent-pro-600 text-beige text-xl sm:text-2xl sm:mb-8 md:text-lg-subtitle mb-4">Um salgado do tamanho da sua fome</p>
            <Button size="default" variant="btnGreen" className="rubik-600 text-sm sm:text-base text-center md:mx-0 mx-auto"  onClick={handleCustomerClick}>
              Se torne um cliente
            </Button>
          </div>
        </div>
    </section>
  )
}