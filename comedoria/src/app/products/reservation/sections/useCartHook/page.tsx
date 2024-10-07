import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  type: string;
  flavor: string;
}

export const useCart = () => {
  const searchParams = useSearchParams();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cartParam = searchParams.get('cart');
    if (cartParam) {
      try {
        const decodedCart = JSON.parse(decodeURIComponent(cartParam));
        setCartItems(decodedCart);
      } catch (error) {
        console.error('Error parsing cart data:', error);
      }
    }
  }, [searchParams]);

  const calculateTotal = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return { cartItems, calculateTotal };
};
