import { UserPlus, CalendarPlus, MapPin, CreditCard, Package } from 'lucide-react'
import "@/app/globals.css"

export default function Process() {
  return (
    <section className="bg-brown py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="advent-pro-700 text-3xl sm:text-4xl md:text-lg-subtitle font-bold text-beige text-center mb-8 sm:mb-12">Como funciona?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
            {[
              { icon: UserPlus, text: "Crie sua conta" },
              { icon: CalendarPlus, text: "Faça sua reserva" },
              { icon: MapPin, text: "Vá no local" },
              { icon: CreditCard, text: "Pague o pedido" },
              { icon: Package, text: "Receba o pedido" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <step.icon className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-beige mb-3 sm:mb-4" />
                <p className="rubik-400 text-sm sm:text-base md:text-lg-text text-beige text-center">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  ) 
}