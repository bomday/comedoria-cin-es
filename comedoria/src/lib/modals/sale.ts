import { Schema, model, models } from "mongoose";

const SaleSchema = new Schema (
    {   
        // Recebe vendedor responsável
        seller: {
            type: Schema.Types.ObjectId, // Referência ao modelo Seller
            ref: 'Seller', // Relaciona com o Seller
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
        reservation_id: {
            type: String,
            default: ""
        },
        discount: {
            type: Boolean,
            default: false
        },
        payment: {
            type: String,
            enum: ['cash', 'credit_card', 'debit_card', 'pix'],
            required: true
        }
    },
    {
        // Registra data de criação e atualização para gerenciamento
        timestamps: true
    }
);

// Exportando o modelo do usuário
const Sale = models.Sale || model('Sale', SaleSchema);
export default Sale;