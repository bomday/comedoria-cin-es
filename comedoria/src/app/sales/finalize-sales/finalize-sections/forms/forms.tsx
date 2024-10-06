"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { Alert } from "@/components/ui/alert";
import Link from 'next/link';

interface FoodItem {
  name: string;
  quantity: number;
  price: number;
}

export default function FinalizeSales() {
  const searchParams = useSearchParams();
  
  const router = useRouter();

  const [items, setItems] = useState<FoodItem[]>([]);
  const [isEmployeeDiscount, setIsEmployeeDiscount] = useState(false);
  const [paymentType, setPaymentType] = useState("dinheiro");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (searchParams) {
      const products: FoodItem[] = [];
      const productKeys = Array.from(searchParams.keys()).filter(key => key.startsWith('product'));

      productKeys.forEach((key, index) => {
        const quantity = searchParams.get(`quantity_${index + 1}`); // Adiciona 1 ao índice
        const price = searchParams.get(`price_${index + 1}`); // Adiciona 1 ao índice
        const value = searchParams.get(key); // Obtém o nome do produto

        if (quantity && price && value) {
          products.push({
            name: value,
            quantity: parseInt(quantity),
            price: parseFloat(price),
          });
        }
      });

      setItems(products); // Atualiza o estado com a lista de produtos
    }
  }, [searchParams]);

  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handleFinalizeSale = (): void => {
  
    setShowAlert(true);
  
    setTimeout(() => {
      setShowAlert(false);
      router.push('/staff-products');
    }, 1000);
  };

  return (
    <section className="mt-2">
        <div className="flex flex-col items-center inset-0 p-20 justify-start bg-black bg-opacity-40 z-10">
            <div className="flex justify-between items-center mt-4 mb-4 w-full max-w-7xl">
                <h1 className="text-5xl advent-pro-700 text-[#F2BF5E]">Finalize sua venda</h1>
                <Link href="/sales">
                    <Button className="bg-transparent border-none text-white hover:bg-[#F0F0F0]">
                        <ArrowLeft className="mr-2 h-8 w-8" />
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[128px]">
                <div>
                    <h2 className="text-4xl advent-pro-700 mb-4">Pedido</h2>
                    {items.length > 0 ? (
                        items.map((item, index) => (
                        <div
                            key={index}
                            className="shadow-sm transition-transform transform hover:scale-105 flex items-center w-full md:flex-row mb-4 bg-background border-[0.29px] border-[#9B470180] rounded-lg pr-2">
                            <div className="w-16 h-16 bg-[#FFF5E6] rounded-lg flex items-center justify-center mr-3">
                                <ImageIcon className="w-10 h-10 text-[#FFA500]" />
                            </div>
                            <div className="flex-grow">
                                <p className="font-inter flex items-start">{item.name}</p>
                            </div>
                            <div className="flex flex-col items-center space-x-2 mr-2">
                                <p className="text-xl font-inter">{item.quantity}</p>
                                <p className="text-sm font-inter">Unidades</p>
                            </div>
                        </div>
                        ))
                    ) : (
                        <div className="p-4 text-gray-500">Nenhum produto selecionado</div>
                    )}
                    <div className="flex justify-end items-start mt-4">
                        <p className="text-lg advent-pro-700 mr-2">Total:</p>
                        <span className="text-3xl advent-pro-700">R$ {total.toFixed(2)}</span>
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl advent-pro-700 mb-4">Pagamento</h2>
                <div className="mb-4">
                    <Checkbox
                    id="employee-discount"
                    checked={isEmployeeDiscount}
                    onCheckedChange={(checked) => setIsEmployeeDiscount(checked as boolean)}
                    className="text-[#45480F] checked:bg-[#45480F] checked:border-transparent"
                    />
                    <label htmlFor="employee-discount" className="font-inter text-2x1 ml-2">
                    Desconto para funcionário
                    </label>
                </div>
                <h3 className="text-xl advent-pro-700 mb-2">Tipo de Pagamento</h3>
                <RadioGroup value={paymentType} onValueChange={setPaymentType}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dinheiro" id="dinheiro" />
                        <Label htmlFor="dinheiro">Dinheiro</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="cartao-credito" id="cartao-credito" />
                        <Label htmlFor="cartao-credito">Cartão de Crédito</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="cartao-debito" id="cartao-debito" />
                        <Label htmlFor="cartao-debito">Cartão de Débito</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label htmlFor="pix">Pix</Label>
                    </div>
                </RadioGroup>
                <div className="flex justify-end items-start mt-8">
                    <p className="text-lg advent-pro-700 mb-2 mr-2">Total a receber:</p>
                    <p className="text-4xl advent-pro-700">R$ {total.toFixed(2)}</p>
                </div>
                <Button
                    className="flex items-center w-[420px] mt-8 mx-auto bg-[#F2BF5E] hover:bg-[#F0C24D] rubik-600 text-lg text-beige"
                    onClick={handleFinalizeSale}
                >
                    Finalizar Venda
                </Button>
                </div>
                <Alert
                    message="Sua venda foi efetuada com sucesso!"
                    isVisible={showAlert}
                    onClose={() => setShowAlert(false)}
                />
            </div>
        </div>
    </section>
  );
}
