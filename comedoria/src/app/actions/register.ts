"use server"
import connect from "@/lib/db";
import Customer from "@/lib/modals/customer";
import bcrypt from "bcryptjs";
import { CustomerAPI } from "@/app/api/customer/route";

export const register = async (values: any) => {

    const { email, password, username } = values;

    try {
        await connect();
        const userFound = await Customer.findOne({ email });
        if(userFound){
            return { error: "Email já cadastrado!" };
        }
        
        // Senha é passada normalmente, pois ao salvar no banco de dados já é criptografada 
        const user = {
            email,
            password,
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