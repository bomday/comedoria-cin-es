import { UserPlus, CalendarPlus, MapPin, CreditCard, Package, Instagram, Facebook, Linkedin } from 'lucide-react'
import "@/app/globals.css"

export default function Process() {
  return (
    <section className="bg-brown py-16">
        <div className="container mx-auto px-4">
          <h2 className="advent-pro-700 text-lg-subtitle font-bold text-beige text-center mb-12">Como funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { icon: UserPlus, text: "Crie sua conta" },
              { icon: CalendarPlus, text: "Faça sua reserva" },
              { icon: MapPin, text: "Vá no local" },
              { icon: CreditCard, text: "Pague o pedido" },
              { icon: Package, text: "Receba o pedido" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <step.icon className="w-24 h-24 text-beige mb-4" />
                <p className="rubik-400 text-lg-text text-beige text-center">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  ) 
}