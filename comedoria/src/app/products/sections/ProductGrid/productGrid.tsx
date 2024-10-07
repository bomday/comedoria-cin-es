// src/components/ProductGrid/ProductGrid.tsx
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ProdutosImage from '@/app/assets/images/produtos.png';

export interface Product {
  product_name: string,
  stock: number,
  price: number,
  image_url: string
}

interface ProductGridProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, addToCart }) => (
  <div className="rubik-400 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {products.map((product) => (
      <div key={product.product_name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <div className="relative w-full" style={{ paddingTop: '100%' }}>
          <Image
            src={product.image_url || ProdutosImage}
            alt={product.product_name}
            layout="fill"
            objectFit="cover"
            className={product.stock === 0 ? 'grayscale' : ''}
          />
          <div className="rubik-600 absolute rounded-lg top-4 right-4 text-xs text-foreground bg-background bg-opacity-75 px-2 py-1">
            {product.stock === 0 ? 'Indisponível' : `Disponível: ${product.stock}`}
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <h3 className="text-base mb-2">{product.product_name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-base font-bold">R${product.price.toFixed(2)}</span>
            <Button 
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-[#AED970] hover:bg-[#98C256] text-[#FFFFFF] rounded-lg"
              disabled={product.stock === 0}
              onClick={() => addToCart(product)}
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    ))}
  </div>
);