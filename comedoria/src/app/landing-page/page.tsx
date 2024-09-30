import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { UserPlus, CalendarPlus, MapPin, CreditCard, Package, Instagram, Facebook, Linkedin } from 'lucide-react'
import CoxinhaImage from '../../../public/assets/coxinha_home_page.png'
import Navbar from '@/components/ui/Navbar'
import ".././globals.css";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <header className="relative h-[calc(100vh-64px)]">
        <Image
          src={CoxinhaImage}
          alt="Coxinhas fritas"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10">
        <div className="flex flex-col items-start justify-center h-full text-white pl-8 md:pl-16 lg:pl-24">
            <h1 className="text-6xl font-bold mb-4">Comedoria</h1>
            <p className="text-2xl mb-8">Um salgado do tamanho da sua fome</p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Se torne um cliente
            </Button>
          </div>
        </div>
      </header>

      <section className="container mx-auto py-16 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-4xl font-bold text-[#4a6741] mb-6">Nossa Missão</h2>
            <p className="text-gray-700 leading-relaxed">
              Garantir que nenhuma mente brilhante fique sem energia durante um dia de programação intensa
              ou brainstormings maratonas. Entre um código e outro, venha experimentar nossos salgados, que
              são verdadeiros "breakpoints" de sabor! Afinal, quem disse que só os algoritmos merecem
              upgrades? Com nossos quitutes, você vai encontrar o equilíbrio perfeito entre bytes e bites,
              e com certeza vai sair daqui com um sorriso tão grande quanto uma linha de código sem bugs!
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Estudante com mochila"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#8B4513] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Como funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { icon: UserPlus, text: "Crie sua conta" },
              { icon: CalendarPlus, text: "Faça sua reserva" },
              { icon: MapPin, text: "Vá no local" },
              { icon: CreditCard, text: "Pague o pedido" },
              { icon: Package, text: "Receba o pedido" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <step.icon className="w-16 h-16 text-white mb-4" />
                <p className="text-white text-center">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5E6D3] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-[#4a6741] mb-6">Quer ficar por dentro de tudo?</h2>
              <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Entre no grupo do WhatsApp
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Pastéis na tábua de madeira"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#8B1A1A] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=40&width=150"
                alt="Comedoria Logo"
                width={150}
                height={40}
              />
            </div>
            <div className="text-center md:text-left mb-4 md:mb-0">
              © 2023 Altos Ltd. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-2 md:mb-0 md:mr-4">
                <a href="#" className="text-white hover:text-gray-300 mr-2">Terms & Conditions</a>
                <a href="#" className="text-white hover:text-gray-300">Privacy Policy</a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}