import { Schema, model, models } from "mongoose";

const SellerSchema = new Schema (
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
        },
        shift: {
            type: String,
            enum: ["morning", "afternoon", "night"],
            default: "morning"
        }
    },
    {
        timestamps: true
    }
);

// Exportando o modelo do usuário
const Seller = models.Seller || model('Seller', SellerSchema);
export default Seller;