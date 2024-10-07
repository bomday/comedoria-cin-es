"use server"
import connect from "@/lib/db";
import Customer from "@/lib/modals/customer";
import bcrypt from 'bcryptjs';

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

        // Ensure the correct endpoint is used
        const response = await fetch(new Request('/api/customer', { 
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
};
