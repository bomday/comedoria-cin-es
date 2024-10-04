import Image from 'next/image'
import {CoxinhaBackground} from '../../../assets/index'
import { Button } from "@/components/ui/button"
import "../../../globals.css"

export default function Banner() {
  return (
    <section className="relative h-[calc(100vh)]">
        <Image
          src={CoxinhaBackground}
          alt="Coxinhas fritas"
          layout="fill"
          objectFit="cover"
          className="z-0 pt-16"
        />
        <div className="absolute inset-0 z-10">
          <div className="flex flex-col items-start justify-center h-full text-white pl-8 md:pl-12 lg:pl-16">
            <h1 className="advent-pro-title text-beige text-lg-title">Comedoria</h1>
            <p className="advent-pro-subtitle text-beige text-lg-subtitle mb-8">Um salgado do tamanho da sua fome</p>
            <Button size="default" variant="btnGreen" className="rubik-title">
              Se torne um cliente
            </Button>
          </div>
        </div>
    </section>
  )
}