import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import "@/app/globals.css"

export default function Forms() {
  return (
    <section className="mt-2">
      <div className="flex flex-col md:flex-row w-full gap-10 md:gap-20 lg:gap-80 justify-center md:justify-start inset-0 p-6 md:p-10 lg:p-20 bg-black bg-opacity-40 z-10">
        <div className="z-10 bg-black bg-opacity-40 p-6 md:p-8 rounded-lg w-full md:w-[70%] lg:w-[30%]">
          <h2 className="text-3xl md:text-4xl advent-pro-700 text-[#932838] mb-2">Nosso colaborador?</h2>
          <p className="text-gray-600 font-inter mb-4">Acesse sua conta aqui.</p>
          <form className="space-y-4">
            <div className="w-full mb-4">
              <Label htmlFor="login-email">E-mail</Label>
              <Input id="login-email" placeholder="Digite seu e-mail" />
            </div>
            <div className="w-full mb-4">
              <Label htmlFor="login-password">Senha</Label>
              <Input id="login-password" type="password" placeholder="Digite sua senha" />
            </div>
            <Link href="/staff-products">
              <Button variant="btnWine" className="w-full mt-4 rubik-600">Entrar</Button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  )
}