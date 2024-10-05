import { Schema, model, models } from "mongoose";

const ReservationSchema = new Schema (
    {
        // A reserva deve ser feita por um cliente
        customer: {
            type: Schema.Types.ObjectId, 
            ref: 'Customer', 
            required: true
        },
        // O pedido pode conter mais de um mesmo salgado ou de salgados diferentes 
        order: [
            {
                product_name: {
                    type: String,
                    required: true
                },
                quantity_products: {
                    type: Number,
                    required: true
                }
            }
        ],
        // Para controle de reservas por turno
        shift: {
            type: String,
            enum: ["morning", "afternoon"],
            required: true
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        // Registra data de criação e atualização para gerenciamento
        timestamps: true
    }
);

// Exportando o modelo do usuário
const Reservation = models.Reservation || model('Reservation', ReservationSchema);
export default Reservation;