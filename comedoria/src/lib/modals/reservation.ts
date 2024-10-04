import { Schema, Types, model, models } from "mongoose";

const ReservationSchema = new Schema (
    {
        _id: {
            type: Schema.Types.ObjectId, // Tipo ObjectId, que é uma string
            default: () => new Types.ObjectId(), // Gera um ObjectId automaticamente
            required: true
        },
        quantity_products_sold: {
            type: Number,
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
const Reservation = models.Reservation || model('Reservation', ReservationSchema);
export default Reservation;