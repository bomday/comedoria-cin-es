import CartItemDisplay from "../cartItemDisplay/cartItemDisplay";
import TotalDisplay from "../totalDisplay/totalDisplay";
import { useCart } from "../useCartHook/useCart";

export const CartContent = () => {
    const { cartItems, calculateTotal } = useCart();
  
    return (
      <div className="flex flex-col mx-auto max-w-full md:max-w-[640px]">
        <div className="space-y-4 mb-4">
          {cartItems.map(item => (
            <CartItemDisplay key={item.product_name} item={item} />
          ))}
        </div>
        <TotalDisplay total={calculateTotal()} />
        <p className="text-center text-sm text-gray-600 mb-6">
          Seu pedido ficará reservado até as 17:00
        </p>
      </div>
    );
  };