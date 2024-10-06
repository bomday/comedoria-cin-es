// src/hooks/useCart.ts
import { useState } from 'react';

export interface Product {
  product_name: string,
  stock: number,
  price: number,
  image_url: string
}

export interface CartItem extends Product {
  quantity: number;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product_name === product.product_name);
      if (existingItem) {
        return prevItems.map(item =>
          item.product_name === product.product_name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productName: string, change: number) => {
    setCartItems(prevItems => 
      prevItems.reduce((acc, item) => {
        if (item.product_name === productName) {
          const newQuantity = Math.max(0, item.quantity + change);
          if (newQuantity === 0) {
            return acc;
          } if (newQuantity >= item.stock) {
            return acc.concat({ ...item, quantity: item.stock });
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