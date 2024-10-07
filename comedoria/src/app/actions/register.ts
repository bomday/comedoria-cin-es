"use server"
import connect from "@/lib/db";
import Customer from "@/lib/modals/customer";
import bcrypt from 'bcryptjs';
import { POST } from '@/app/api/customer/route'; // Importa a função POST diretamente

export const registerClient = async (values: any) => {
    const { email, password, username } = values;

    try {
        await connect();
        const userFound = await Customer.findOne({ email });
        if (userFound) {
            return { error: "Email já cadastrado!" };
        }

        const passwordHasheada = await bcrypt.hash(password, 10);
        
        // Senha é passada normalmente, pois ao salvar no banco de dados já é criptografada 
        const user = {
            email,
            password: passwordHasheada,
            username
        };

        // Envie a solicitação POST diretamente
        const response = await POST(new Request('', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }));

        if (response.status === 201) {
            return { success: true };
        } else {
            return { error: await response.text() };
        }
    } catch (e: any) {
        console.log(e);
        return { error: e.message };
    }
}
