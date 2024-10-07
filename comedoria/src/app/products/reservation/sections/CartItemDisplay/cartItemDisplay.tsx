import { Image as ImageIcon } from "lucide-react";
import Image from 'next/image';
import ProdutosImage from '@/app/assets/images/produtos.png';

export interface CartItem {
  product_name: string,
  stock: number,
  price: number,
  image_url: string,
  quantity: number
}

const CartItemDisplay = ({ item }: { item: CartItem }) => (
  <div className="flex items-center bg-[#FFFFFF] rounded-lg border border-[#E5E7EB] shadow-sm transition-transform transform hover:scale-105">
    <div className="w-[96px] h-[96px] bg-[#FFF9E5] rounded-l-lg flex items-center justify-center">
      <ImageIcon className="w-12 h-12 text-[#FFD700]" />
    </div>
    <div className="flex-grow px-4">
      <p className="font-medium text-lg">{item.product_name}</p>
    </div>
    <div className="w-[120px] h-full flex flex-col items-center justify-center">
      <p className="text-2xl font-bold">{item.quantity}</p>
      <p className="text-sm text-gray-500">{item.quantity === 1 ? 'unidade' : 'unidades'}</p>
    </div>
  </div>
);

export default CartItemDisplay;
