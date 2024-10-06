"use client"

import { FormEvent, useRef, useState } from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert } from "@/components/ui/alert"
import "@/app/globals.css"

export default function Forms() {    
    const [error, setError] = useState("");
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const router = useRouter();
    const loginFormRef = useRef<HTMLFormElement>(null);
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

    return (
        <section className="mt-2">
            <div className=" flex flex-col h-[calc(100vh-4.5rem)] p-28 md:flex-row gap-[240px] max-w-[25rem] mx-auto]">
                <div className="flex-1 w-[25rem] h-auto">
                    <h2 className="advent-pro-700 text-lg-smtitle font-bold text-wine mb-2">Nosso colaborador?</h2>
                    <p className="rubik-400 text-gray-600 mb-4">Acesse sua conta aqui.</p>
                    <form className="space-y-4" onSubmit={handleLogin} ref={loginFormRef}>
                        <div className="rubik-400 w-[25rem]">
                            <Label htmlFor="login-email">E-mail</Label>
                            <Input id="login-email" placeholder="Digite seu e-mail" />
                        </div>
                        <div className="rubik-400 w-[25rem] pb-4">
                            <Label htmlFor="login-password">Senha</Label>
                            <Input id="login-password" type="password" placeholder="Digite sua senha" />
                        </div>
                        <Button type="submit" variant="btnWine" className="rubik-600 w-[25rem]">Entrar</Button>
                    </form>
                </div>
            </div>
            <Alert
                message={error}
                isVisible={showErrorAlert}
                variant="error"
                onClose={() => setShowErrorAlert(false)}
            />
        </section>
    )
}