// src/components/CartComponent/CartComponent.tsx
import { ShoppingCart, Minus, Plus, Image as ImageIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

export interface Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
    available: number;
  }
  
export interface CartItem extends Product {
    quantity: number;
  }

interface CartComponentProps {
  cartItems: CartItem[];
  updateQuantity: (id: number, change: number) => void;
  onCheckout: () => void;
  calculateTotal: () => number;
}

export const CartComponent: React.FC<CartComponentProps> = ({
  cartItems,
  updateQuantity,
  onCheckout,
  calculateTotal
}) => {
  return (
    <div className="w-full md:w-[419px] bg-white p-2 flex flex-col">
      <div className="flex items-center justify-center mb-4">
        <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 text-[#8B4513] mr-2" />
        <h2 className="text-xl md:text-2xl font-bold text-[#8B4513]">Seu Carrinho</h2>
      </div>
      
      <div className="flex-grow overflow-y-auto max-h-[calc(100vh-300px)]">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Seu carrinho está vazio</p>
        ) : (
          <>
            {cartItems.map(product => (
              <div key={product.id} className="mb-4 bg-[#FFF9F3] border-[0.20px] border-[#9B470180] rounded-[15px] flex overflow-hidden">
                <div className="w-[60px] h-[60px] bg-[#F9F9DF] flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-[#FFA500]" />
                </div>
                <div className="flex-grow flex items-center justify-between px-4">
                  <div>
                    <h3 className="font-bold text-sm md:text-base text-[#8B4513]">{product.name}</h3>
                  </div>
                  <div className="flex items-center">
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="h-8 w-8 bg-[#F9F9DF] hover:bg-[#E0E0B0] border-[#8B4513] rounded-full" 
                      onClick={() => updateQuantity(product.id, -1)}
                    >
                      <Minus className="h-4 w-4 text-[#8B4513]" />
                    </Button>
                    <span className="w-6 text-center md:w-8 font-bold text-sm md:text-base text-[#8B4513]">{product.quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="h-8 w-8 bg-[#F9F9DF] hover:bg-[#E0E0B0] border-[#8B4513] rounded-full"
                      onClick={() => updateQuantity(product.id, 1)}
                    >
                      <Plus className="h-4 w-4 text-[#8B4513]" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-[#8B4513]">Total:</span>
          <span className="text-2xl font-bold text-[#8B4513]">R${calculateTotal().toFixed(2)}</span>
        </div>
        <Button className="w-full bg-[#8B4513] text-[#FFFFFF] hover:bg-[#A0522D]" onClick={onCheckout}>
          Fazer Reserva
        </Button>
      </div>
    </div>
  );
}