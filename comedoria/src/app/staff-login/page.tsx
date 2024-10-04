'use client'

import { useRouter } from 'next/navigation'; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from '@/components/ui/Navbar';

export default function StaffLogin() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="relative flex flex-col md:flex-row gap-[240px] max-w-4xl mx-auto">
        <div className="flex-1 absolute left-[70px] top-[41px] right-[840px] w-[530px] h-[781px] ml[70px] space-y-4">
          <h2 className="text-5xl font-bold text-[#932838] mb-2">Nosso colaborador?</h2>
          <p className="text-gray-600 mb-4">Acesse sua conta aqui.</p>
          <div className="w-[386.07px]">
            <Label htmlFor="login-email">E-mail</Label>
            <Input id="login-email" placeholder="Digite seu e-mail" />
          </div>
          <div className="w-[386.07px]">
            <Label htmlFor="login-password">Senha</Label>
            <Input id="login-password" type="password" placeholder="Digite sua senha" />
          </div>
          <Button onClick={() => router.push('/staff-products')} type="button" className="w-[386.07px] bg-[#8B1A1A] hover:bg-[#932838]">
            Entrar
          </Button>
        </div>
      </div>
    </>
  );
}
