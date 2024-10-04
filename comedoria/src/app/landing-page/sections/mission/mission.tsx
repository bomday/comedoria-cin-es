import Image from 'next/image'
import {Student} from '../../../assets/index'
import "../../../globals.css"

export default function Mission() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-[40%]">
            <h2 className="advent-pro-title text-lg-mdtitle font-bold text-darkgreen mb-6">Nossa Missão</h2>
            <p className="rubik-text text-gray-700 leading-relaxed">
              Garantir que nenhuma mente brilhante fique sem energia durante um dia de programação intensa
              ou brainstormings maratonas. Entre um código e outro, venha experimentar nossos salgados, que
              são verdadeiros "breakpoints" de sabor! Afinal, quem disse que só os algoritmos merecem
              upgrades? Com nossos quitutes, você vai encontrar o equilíbrio perfeito entre bytes e bites,
              e com certeza vai sair daqui com um sorriso tão grande quanto uma linha de código sem bugs!
            </p>
          </div>
          <div className="w-[50%] mt-8 md:mt-0">
            <Image
              src={Student}
              alt="Estudante com mochila"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}