import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Mail } from "lucide-react"
import "@/app/globals.css"

export default function Forms() {
  return (
    
        <section className="mt-2">
            <div className="flex gap-80 justify-center inset-0 p-20 bg-black bg-opacity-40 z-10">
                <div className="z-10 bg-black bg-opacity-40 p-8 rounded-lg w-[30%]">
                    <h2 className="text-3xl font-bold text-[#45480F] mb-2">Já possui uma conta?</h2>
                    <p className="text-gray-600 mb-4">Acesse sua conta aqui.</p>
                    <form className="space-y-4">
                        <div className="w-full mb-4">
                            <Label htmlFor="login-email">E-mail</Label>
                            <Input id="login-email" placeholder="Digite seu e-mail" />
                        </div>
                        <div className="w-full mb-4">
                            <Label htmlFor="login-password">Senha</Label>
                            <Input id="login-password" type="password" placeholder="Digite sua senha" />
                        </div>
                        <div className="flex justify-center">
                            <a href="#" className="text-sm text-gray-600 hover:underline">Esqueceu a Senha?</a>
                        </div>
                        <Button className="w-full bg-[#556B2F] hover:bg-[#4c6128]">Entrar</Button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600 mb-2">ou acesse via:</p>
                        <div className="flex justify-center space-x-4">
                            <Button variant="btnSocialMedia">
                                <Mail className="h-4 w-4" />
                            </Button>
                            <Button variant="btnSocialMedia" >
                                <Facebook className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="z-10 bg-black bg-opacity-40 p-8 rounded-lg w-[30%]">
                    <h2 className="text-3xl font-bold text-[#8B4513] mb-2">Cadastre-se</h2>
                    <p className="text-gray-600 mb-4">É de graça!</p>
                    <form className="space-y-4">
                        <div className="w-full mb-4">
                            <Label htmlFor="register-name">Nome</Label>
                            <Input id="register-name" placeholder="Digite seu nome" />
                        </div>
                        <div className="w-full mb-4">
                            <Label htmlFor="register-email">E-mail</Label>
                            <Input id="register-email" placeholder="Digite seu e-mail" />
                        </div>
                        <div className="w-full mb-4">
                            <Label htmlFor="register-password">Senha</Label>
                            <Input id="register-password" type="password" placeholder="Digite uma senha" />
                        </div>
                        <div className="w-full mb-4">
                            <Label htmlFor="register-confirm-password">Confirme sua senha</Label>
                            <Input id="register-confirm-password" type="password" placeholder="Digite sua senha novamente" />
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Checkbox id="terms" />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                            Ao criar sua conta você aceita os{" "}
                            <a href="#" className="text-[#8B4513] hover:underline">Termos e Condições de Uso</a> e a{" "}
                            <a href="#" className="text-[#8B4513] hover:underline">Política de Privacidade</a>
                            </label>
                        </div>
                        <Button className="w-full bg-[#8B4513] hover:bg-[#7c3d11]">Criar conta</Button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600 mb-2">ou cadastre-se via:</p>
                        <div className="flex justify-center space-x-4">
                            <Button variant="btnSocialMedia" size="default">
                                <Mail className="h-4 w-4" />
                            </Button>
                            <Button variant="btnSocialMedia" size="default">
                                <Facebook className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}