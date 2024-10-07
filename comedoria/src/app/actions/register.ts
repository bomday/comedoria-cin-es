"use server"
import connect from "@/lib/db";
import Customer from "@/lib/modals/customer";
import { CustomerAPI } from "@/app/api/customer/route";
import bcrypt from 'bcryptjs'

export const registerClient = async (values: any) => {

    const { email, password, username } = values;

    try {
        await connect();
        const userFound = await Customer.findOne({ email });
        if(userFound){
            return { error: "Email já cadastrado!" };
        }

        const passwordHasheada = await bcrypt.hash(password, 10);
        
        // Senha é passada normalmente, pois ao salvar no banco de dados já é criptografada 
        const user = {
            email,
            password: passwordHasheada,
            username
        }

        const customerAPI = new CustomerAPI()
        customerAPI.POST(user)
        return { success: true };
    }catch(e: any){
        console.log(e);
        return { error: e.message };
    }
}