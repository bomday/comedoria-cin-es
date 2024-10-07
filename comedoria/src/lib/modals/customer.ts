import { Schema, model, models } from "mongoose";

const CustomerSchema = new Schema (
    {
        email: {
            type: String, 
            required: true, 
            unique: true
        },
        password: {
            type: String, 
            required: true
        },
        username: {
            type: String, 
            required: true
        }
    },
    {
        // Registra data de criação e atualização para gerenciamento
        timestamps: true
    }
);

// Exportando o modelo do usuário
const Customer = models.Customer || model('Customer', CustomerSchema);
export default Customer;