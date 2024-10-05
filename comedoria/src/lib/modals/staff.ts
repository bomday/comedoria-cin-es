import { Schema, model, models } from "mongoose";

const StaffSchema = new Schema (
    {
        // Informa se é vendedor ou gerente
        seller: {
            type: Boolean,
            default: true
        },
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
        // Salário é calculado a partir de vendas
        salary: {
            type: Number,
            default: 0
        },
        // Total de produtos vendidos para fins de gerenciamento
        products_sold: {
            type: Number,
            default: 0
        },
        // Dias e turnos de trabalho na semana
        schedule: [
            {
                weekday: {
                    type: String,
                    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    required: true
                },
                shift: {
                    type: String,
                    enum: ['morning', 'afternoon'],
                    required: true
                }
            }
        ]
    },
    {
        // Registra data de criação e atualização para gerenciamento
        timestamps: true
    }
);

// Exportando o modelo do usuário
const Staff = models.Staff || model('Staff', StaffSchema);
export default Staff;