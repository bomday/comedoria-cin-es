// src/hooks/useCart.ts
import { useState } from 'react';

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

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prevItems => 
      prevItems.reduce((acc, item) => {
        if (item.id === id) {
          const newQuantity = Math.max(0, item.quantity + change);
          if (newQuantity === 0) {
            return acc;
          }
          return [...acc, { ...item, quantity: newQuantity }];
        }
        return [...acc, item];
      }, [] as CartItem[])
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return { cartItems, addToCart, updateQuantity, calculateTotal };
};