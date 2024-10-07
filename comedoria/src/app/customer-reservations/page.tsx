"use client";
import { useState, useEffect, Suspense } from 'react';
import { Trash2, Image as ImageIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Alert } from "@/components/ui/alert";
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NavbarLogged from '@/components/ui/Navbar-logged';
import ConfirmationModal from '@/components/ui/confirmation-modal';
import Footer from '@/components/ui/footer';
import Loading from '../(errors)/loading/loading';
import AuthenticationError from '../(errors)/authentication-error/authentication-error';
import { useSession } from 'next-auth/react';

interface HistoryItem {
  id: string;
  items: string;
  price: number;
  date: string;
  image: string;
}

export default function ReserveView() {
  const [showAlert, setShowAlert] = useState(false);
  const [showCancellationAlert, setShowCancellationAlert] = useState(false);
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [activeReservations, setActiveReservations] = useState<HistoryItem[]>([]);
  const { data: session, status } = useSession();
  const [selectedReservationId, setSelectedReservationId] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleConfirm = async () => {
    setShowCancellationAlert(true);
    
    // Chame a API para cancelar a reserva (passando o ID da reserva)
    try {
        const response = await fetch(`/api/reservation?id=${selectedReservationId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: false }), // Mudando o status para falso
        });

        if (!response.ok) {
            throw new Error('Failed to cancel the reservation');
        }

        // Aqui você pode atualizar o estado das reservas ativas, se necessário
        // Exemplo:
        setActiveReservations(prev => prev.filter(res => res.id !== selectedReservationId));
    } catch (error) {
        console.error('Error cancelling reservation:', error);
    }

    setTimeout(() => setShowCancellationAlert(false), 2000);
    setIsOpen(false);
  };

  // Função para buscar o preço de um produto pelo nome
  const fetchProductPrice = async (productName: string): Promise<number> => {
    const response = await fetch(`/api/inventory?product_name=${encodeURIComponent(productName)}`);
    const data = await response.json();
    
    if (data && data.length > 0) {
      return data[0].price;
    }
    return 0;
  };

  useEffect(() => {
    const fetchReservations = async () => {
      if (status === 'authenticated' && session?.user) {
        try {
          const customerResponse = await fetch(`/api/customer?email=${session.user.email}`);
          if (!customerResponse.ok) {
            throw new Error('Failed to fetch customer details');
          }
          const customerData = await customerResponse.json();
          const customerId = customerData._id;

          const response = await fetch(`/api/reservation?customer_id=${customerId}`);
          if (!response.ok) {
            throw new Error("Erro ao buscar reservas");
          }
          const data = await response.json();

          const formattedItems: HistoryItem[] = await Promise.all(
            data.map(async (reservation: any) => {
              const totalPrice = await Promise.all(
                reservation.order.map(async (item: any) => {
                  const productPrice = await fetchProductPrice(item.product_name);
                  return productPrice * item.quantity_products; 
                })
              ).then(prices => prices.reduce((acc, price) => acc + price, 0));
              
              return {
                id: reservation._id.$oid,
                items: reservation.order.map((item: any) => `${item.product_name} (x${item.quantity_products})`).join(' + '),
                price: totalPrice,
                date: new Date(reservation.createdAt).toLocaleDateString(),
              };
            })
          );

          setHistoryItems(formattedItems);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchReservations();

    const fetchReservationsCustomerStatus = async () => {
      if (status === 'authenticated' && session?.user) {
        try {
          const customerResponse = await fetch(`/api/customer?email=${session.user.email}`);
          if (!customerResponse.ok) {
            throw new Error('Failed to fetch customer details');
          }
          const customerData = await customerResponse.json();
          const customerId = customerData._id;
  
          // Aqui, você busca reservas com status true
          const response = await fetch(`/api/reservation?customer_id=${customerId}&status=true`);
          if (!response.ok) {
            throw new Error("Erro ao buscar reservas");
          }
          const data = await response.json();
  
          const formattedReservations: HistoryItem[] = await Promise.all(
            data.map(async (reservation: any) => {
              const totalPrice = await Promise.all(
                reservation.order.map(async (item: any) => {
                  const productPrice = await fetchProductPrice(item.product_name);
                  return productPrice * item.quantity_products; 
                })
              ).then(prices => prices.reduce((acc, price) => acc + price, 0));

              return {
                id: reservation._id,
                items: reservation.order.map((item: any) => `${item.product_name} (x${item.quantity_products})`).join(' + '),
                date: new Date(reservation.createdAt).toLocaleDateString(),
                price: totalPrice, // Usar o preço total calculado
              };
            })
          );
  
          setActiveReservations(formattedReservations);
        } catch (error) {
          console.error(error);
        }
      }
    };
  
    fetchReservationsCustomerStatus();  
  }, [session, status]);  

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return <AuthenticationError />;
  }  

  const SearchParamsWrapper = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
  
    useEffect(() => {
      const shouldShowAlert = searchParams.get('showAlert') === 'true';
      if (shouldShowAlert) {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
        router.replace('/customer-reservations');
      }
    }, [searchParams, router]);
  
    return null; // Este componente não precisa renderizar nada
  };  

  const renderAlert = (message: string, isVisible: boolean, closeHandler: () => void) => (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50"
    >
      <Alert message={message} isVisible={isVisible} onClose={closeHandler} />
    </motion.div>
  );

  return (
    <div className="rubik-400 flex flex-col min-h-screen">
      <NavbarLogged />
      <Suspense fallback={<Loading />}>
        <SearchParamsWrapper />
      </Suspense>
      <div className="mt-16">
        <AnimatePresence>
          {showAlert && renderAlert("Sua reserva foi efetuada com sucesso!", showAlert, () => setShowAlert(false))}
          {showCancellationAlert && renderAlert("Sua reserva foi cancelada com sucesso!", showCancellationAlert, () => setShowCancellationAlert(false))}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-16 py-8 bg-background min-h-45vh">
        <h1 className="text-4xl md:advent-pro-700 text-5xl font-bold text-darkgreen mb-12">Minhas Reservas</h1>

        <div className="flex justify-between flex-col lg:flex-row gap-12">
          <Card className="text-lg-subtitle w-full lg:w-1/4">
            <CardHeader>
              <CardTitle className="text-lg-subtitle advent-pro-600 font-semibold text-darkgreen">Ativas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 md:min-h-[40vh]">
                {activeReservations.map((reservation) => (
                  <motion.div
                    key={reservation.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="bg-[#E2F2CB] h-32 relative">
                      <ImageIcon className="text-darkgreen w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      <button
                          className="absolute top-4 right-4 text-[#9AB89A] transition-colors duration-200"
                          aria-label="Delete reservation"
                          onClick={() => {
                              setSelectedReservationId(reservation.id); // Armazena o ID da reserva
                              setIsDeleteConfirmationOpen(true);
                              handleOpen();
                          }}
                      >
                          <Trash2 className="text-darkgreen hover:text-[#606A0F] w-6 h-6" />
                      </button>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-2 text-[#4A6741] line-clamp-2">{reservation.items}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-[#4A6741]">
                          <p className="text-sm font-semibold">{reservation.date}</p>
                        </div>
                        <div className="flex items-center text-[#4A6741]">
                          <p className="text-sm font-semibold">R$ {reservation.price}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="text-lg-subtitle w-full lg:w-2/3">
            <CardHeader>
              <CardTitle className="text-lg-subtitle advent-pro-600 font-semibold text-darkgreen">Histórico</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 md:min-h-[40vh]">
                {historyItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 flex justify-between items-center shadow-lg rounded-[8px] flex overflow-hidden"
                  >
                    <div className="flex justify-start items-center flex-wrap">
                      <ImageIcon className="w-10 h-10 mr-4" />
                      <div>
                        <p className="font-medium text-lg">{item.items}</p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl text-[#45480F] font-semibold">R$ {item.price.toFixed(2)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
      <ConfirmationModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Confirmação Necessária"
        confirmText="Confirmar"
        cancelText="Cancelar"
        description="Tem certeza de que deseja cancelar essa reserva?"
      />
    </div>
  );
}
