import { Schema, model, models } from "mongoose";

const InventorySchema = new Schema (
    {
        name: {
            type: String, 
            required: true, 
            unique: true
        },
        stock: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        flavor: {
            type: [
                {
                    type: String,
                    enum: ["chicken", "catupiry", "cheese", "meat", "vegetarian"], // Limita as opções permitidas
                    required: true
                }
            ],
            default: [] // Array vazio por padrão
        }
    },
    {
        timestamps: true
    }
);

// Exportando o modelo do usuário
const Inventory = models.Inventory || model('Inventory', InventorySchema);
export default Inventory;