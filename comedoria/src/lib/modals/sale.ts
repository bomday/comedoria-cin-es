import { Schema, Types, model, models } from "mongoose";

const SaleSchema = new Schema (
    {
        _id: {
            type: Schema.Types.ObjectId, // O ID da Sale será o mesmo da Reservation
            ref: 'Reservation', // Refere-se à coleção Reservation
            required: true
        },
        quantity_products_sold: {
            type: Number,
            required: true
        },
        seller: {
            type: String, 
            required: true
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
const Sale = models.Sale || model('Sale', SaleSchema);
export default Sale;