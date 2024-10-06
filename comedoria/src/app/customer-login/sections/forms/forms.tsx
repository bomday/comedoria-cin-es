"use client"
import { FormEvent, useRef, useState } from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { register } from "@/app/actions/register"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert } from "@/components/ui/alert"
import "@/app/globals.css"

export default function Forms() {    
    const [error, setError] = useState("");
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null);
    const loginFormRef = useRef<HTMLFormElement>(null);
    const registerFormRef = useRef<HTMLFormElement>(null);
    const { status } = useSession();

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);
        const res = await signIn("credentials", {
          email: formData.get("email"),
          password: formData.get("password"),
          redirect: false,
        });

        if (res?.error) {
          setError(res.error as string);
          setShowErrorAlert(true)
        } else {
            if (status === "authenticated") {
                router.push("/products");
            } else if (status === "loading") {
                router.push("/loading");
            } 

            loginFormRef.current?.reset();
        }
    };

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get("email")
        const password = formData.get("password")
        const username = formData.get("username")
        const passwordConfirmation = formData.get("passwordConfirmation")

        if (!email || !password || !username) {
            setError("Você deve preencher os campos de cadastro.")
            setShowErrorAlert(true)
            return
        }

        if (!isTermsChecked) { // Verifica se o checkbox está marcado
            setError("Você deve aceitar os Termos e Condições de Uso para se registrar.")
            setShowErrorAlert(true)
            return
        }

        if (password != passwordConfirmation) {
            setError("As senhas inseridas não são iguais! Por favor, tente novamente.")
            setShowErrorAlert(true)
            return
        } 

        const res = await register({
            email: email,
            password: password,
            username: username  
        });

        ref.current?.reset();

        if(res?.error){
            setError(res.error);
            setShowErrorAlert(true)
            return;
        } else {
            setShowSuccessAlert(true)
            registerFormRef.current?.reset()
            setIsTermsChecked(false)
        }
    };

    return (
        <section className="mt-2">
            <div className="flex h-[calc(100vh-4.5rem)] gap-80 justify-center inset-0 p-16 z-10">
                
                <div className="z-10 bg-black bg-opacity-40 p-8 rounded-lg w-[30%]">
                    <h2 className="text-3xl font-bold text-[#45480F] mb-2">Já possui uma conta?</h2>
                    <p className="text-gray-600 mb-4">Acesse sua conta aqui.</p>
                    <form className="space-y-4" onSubmit={handleLogin} ref={loginFormRef}>
                        <div className="w-full mb-4">
                            <Label htmlFor="login-email">E-mail</Label>
                            <Input 
                                id="login-email" 
                                type="email"
                                placeholder="Digite seu e-mail" 
                                name="email"
                            />
                        </div>
                        <div className="w-full mb-4">
                            <Label htmlFor="login-password">Senha</Label>
                            <Input 
                                id="login-password" 
                                type="password" 
                                placeholder="Digite sua senha" 
                                name="password"
                            />
                        </div>
                        <div className="flex justify-center">
                            <a href="#" className="text-sm text-gray-600 hover:underline">Esqueceu a Senha?</a>
                        </div>
                        <Button type="submit" size="default" variant="btnGreen" className="w-full">Entrar</Button>
                    </form>
                </div>
                
                <div className="z-10 bg-black bg-opacity-40 p-8 rounded-lg w-[30%]">
                    <h2 className="text-3xl font-bold text-[#8B4513] mb-2">Cadastre-se</h2>
                    <p className="text-gray-600 mb-4">É de graça!</p>
                    <form className="space-y-4" onSubmit={handleRegister} ref={registerFormRef}>
                        <div className="w-full mb-4">
                            <Label htmlFor="register-name">Nome</Label>
                            <Input 
                                id="register-name" 
                                type="text"
                                placeholder="Digite seu nome" 
                                name="username"
                            />
                        </div>
                        <div className="w-full mb-4">
                            <Label htmlFor="register-email">E-mail</Label>
                            <Input 
                                id="register-email" 
                                type="email"
                                placeholder="Digite seu e-mail"
                                name="email"
                            />
                        </div>
                        <div className="w-full mb-4">
                            <Label htmlFor="register-password">Senha</Label>
                            <Input 
                                id="register-password" 
                                type="password" 
                                placeholder="Digite uma senha"
                                name="password"
                            />
                        </div>
                        <div className="w-full mb-4">
                            <Label htmlFor="register-confirm-password">Confirme sua senha</Label>
                            <Input 
                                id="register-confirm-password" 
                                type="password" 
                                placeholder="Digite sua senha novamente" 
                                name="passwordConfirmation"
                            />
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Checkbox 
                                id="terms" 
                                checked={isTermsChecked} 
                                onCheckedChange={(checked) => setIsTermsChecked(checked as boolean)}
                            />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                            Ao criar sua conta você aceita os{" "}
                            <a href="#" className="text-[#8B4513] hover:underline">Termos e Condições de Uso</a> e a{" "}
                            <a href="#" className="text-[#8B4513] hover:underline">Política de Privacidade</a>
                            </label>
                        </div>
                        <Button type="submit" className="w-full bg-[#8B4513] hover:bg-[#7c3d11]">Criar conta</Button>
                    </form>
                </div>
            </div>
            <Alert
                message={error}
                isVisible={showErrorAlert}
                variant="error"
                onClose={() => setShowErrorAlert(false)}
            />
            <Alert
                message={"Cadastro realizado com sucesso! Faça login para acessar sua conta."}
                isVisible={showSuccessAlert}
                variant="default"
                onClose={() => setShowSuccessAlert(false)}
            />
        </section>
    )
}