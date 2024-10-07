"use client"
import { FormEvent, useRef, useState } from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { registerClient } from "@/app/actions/register"
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

        if (!isTermsChecked) {
            setError("Você deve aceitar os Termos e Condições de Uso para se registrar.")
            setShowErrorAlert(true)
            return
        }

        if (password != passwordConfirmation) {
            setError("As senhas inseridas não são iguais! Por favor, tente novamente.")
            setShowErrorAlert(true)
            return
        } 

        const res = await registerClient({
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
        <section className="mt-2 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-20 justify-center items-start min-h-[calc(100vh-4.5rem)] py-8 lg:py-16">
                
                <div className="z-10 bg-black bg-opacity-40 p-6 sm:p-8 rounded-lg w-full max-w-md mb-8 lg:mb-0">
                    <div className="h-[76px] flex flex-col justify-between">
                        <h2 className="advent-pro-700 text-2xl sm:text-3xl md:text-lg-smtitle font-bold text-darkgreen">Já possui uma conta?</h2>
                        <p className="rubik-400 text-gray-200 mt-4">Acesse sua conta aqui.</p>
                    </div>
                    <form className="space-y-4 lg:mt-10" onSubmit={handleLogin} ref={loginFormRef}>
                        <div className="rubik-400 w-full mb-4">
                            <Label htmlFor="login-email" className="text-gray-200">E-mail</Label>
                            <Input 
                                id="login-email" 
                                type="email"
                                placeholder="Digite seu e-mail" 
                                name="email"
                                className="mt-1"
                            />
                        </div>
                        <div className="rubik-400 w-full mb-4 pb-4">
                            <Label htmlFor="login-password" className="text-gray-200">Senha</Label>
                            <Input 
                                id="login-password" 
                                type="password" 
                                placeholder="Digite sua senha" 
                                name="password"
                                className="mt-1"
                            />
                        </div>
                        <Button type="submit" size="default" variant="btnGreen" className="rubik-600 w-full">Entrar</Button>
                    </form>
                </div>
                
                <div className="z-10 bg-black bg-opacity-40 p-6 sm:p-8 rounded-lg w-full max-w-md">
                    <div className="h-[76px] flex flex-col justify-between">
                        <h2 className="advent-pro-700 text-2xl sm:text-3xl md:text-lg-smtitle font-bold text-brown">Cadastre-se</h2>
                        <p className="rubik-400 text-gray-200">É de graça!</p>
                    </div>
                    <form className="space-y-4 mt-4" onSubmit={handleRegister} ref={registerFormRef}>
                        <div className="rubik-400 w-full mb-4">
                            <Label htmlFor="register-name" className="text-gray-200">Nome</Label>
                            <Input 
                                id="register-name" 
                                type="text"
                                placeholder="Digite seu nome" 
                                name="username"
                                className="mt-1"
                            />
                        </div>
                        <div className="rubik-400 w-full mb-4">
                            <Label htmlFor="register-email" className="text-gray-200">E-mail</Label>
                            <Input 
                                id="register-email" 
                                type="email"
                                placeholder="Digite seu e-mail"
                                name="email"
                                className="mt-1"
                            />
                        </div>
                        <div className="rubik-400 w-full mb-4">
                            <Label htmlFor="register-password" className="text-gray-200">Senha</Label>
                            <Input 
                                id="register-password" 
                                type="password" 
                                placeholder="Digite uma senha"
                                name="password"
                                className="mt-1"
                            />
                        </div>
                        <div className="rubik-400 w-full mb-4">
                            <Label htmlFor="register-confirm-password" className="text-gray-200">Confirme sua senha</Label>
                            <Input 
                                id="register-confirm-password" 
                                type="password" 
                                placeholder="Digite sua senha novamente" 
                                name="passwordConfirmation"
                                className="mt-1"
                            />
                        </div>
                        <div className="flex items-start space-x-2 mb-4">
                            <Checkbox 
                                id="terms" 
                                checked={isTermsChecked} 
                                onCheckedChange={(checked: boolean) => setIsTermsChecked(checked as boolean)}
                                className="mt-1"
                            />
                            <label htmlFor="terms" className="rubik-400 text-sm text-foreground">
                            Ao criar sua conta você aceita os{" "}
                            <a href="https://github.com/bomday/comedoria-cin-es/blob/main/comedoria/public/docs/business/terms_and_conditions.md" className="text-wine hover:underline">Termos e Condições de Uso</a> e a{" "}
                            <a href="https://github.com/bomday/comedoria-cin-es/blob/main/comedoria/public/docs/business/privacy_policy.md" className="text-wine hover:underline">Política de Privacidade</a>
                            </label>
                        </div>
                        <Button type="submit" className="rubik-600 w-full bg-brown hover:bg-[#7c3d11]">Criar conta</Button>
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