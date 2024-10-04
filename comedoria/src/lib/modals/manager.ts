import { Schema, model, models } from "mongoose";

const ManagerSchema = new Schema (
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
        },
        phone: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
            default: 0
        },
        products_sold: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

// Exportando o modelo do usuário
const Manager = models.Manager || model('Manager', ManagerSchema);
export default Manager;