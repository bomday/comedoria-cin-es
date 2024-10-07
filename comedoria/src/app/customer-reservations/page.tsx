"use client"
import { useState, useEffect } from 'react';
import { Trash2, Image as ImageIcon, Calendar, DollarSign } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Alert } from "@/components/ui/alert";
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PriceBanner from '@/components/ui/price-banner';
import NavbarLogged from '@/components/ui/Navbar-logged';
import ConfirmationModal from '@/components/ui/confirmation-modal';
import Footer from '@/components/ui/footer';

interface Reservation {
  id: string;
  items: string;
  date: string;
  price: number;
  currency: string;
}

interface HistoryItem {
  id: string;
  items: string;
  price: number;
  date: string;
  status: 'normal' | 'highlighted';
}

const initialActiveReservations: Reservation[] = [
  { id: '1', items: 'Item 1 + Item 2 + Item 3', date: '14/01/2024', price: 15.00, currency: '€' },
  { id: '2', items: 'Item 1 + Item 2 + Item 3', date: '14/01/2024', price: 15.00, currency: '€' },
  { id: '3', items: '', date: '', price: 0, currency: '€' },
];

const historyItems: HistoryItem[] = [
  { id: '1', items: 'Item 1 + Item 2 + Item 3', price: 14.00, date: '14/02/2024', status: 'normal' },
  { id: '2', items: 'Item 1 + Item 2', price: 14.00, date: '14/02/2024', status: 'highlighted' },
  { id: '3', items: 'Item 1', price: 14.00, date: '14/02/2024', status: 'normal' },
  { id: '4', items: 'Item 1 + Item 2 + Item 3 + Item 4', price: 14.00, date: '14/02/2024', status: 'normal' },
  { id: '5', items: 'Product amaaaaaaaaaaaaa.', price: 14.00, date: '14/02/2024', status: 'normal' },
  { id: '6', items: 'Product name', price: 14.00, date: '14/02/2024', status: 'highlighted' },
  { id: '7', items: 'Product amaaaaaaaaaaaaaa', price: 14.00, date: '14/02/2024', status: 'normal' },
  { id: '8', items: 'Product amaaaaaaaaaaa', price: 14.00, date: '14/02/2024', status: 'normal' },
];

export default function ReserveView() {
  const [showAlert, setShowAlert] = useState(false);
  const [showCancellationAlert, setShowCancellationAlert] = useState(false);
  const [activeReservations, setActiveReservations] = useState<Reservation[]>(initialActiveReservations);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);

  useEffect(() => {
    const shouldShowAlert = searchParams.get('showAlert') === 'true';
    if (shouldShowAlert) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      router.replace('/customer-reservations');
    }
  }, [searchParams, router]);

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

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleConfirm = () => {
    //if (currentReservationId) {
      // Remove a reserva do estado activeReservations
      //setActiveReservations((prev) => prev.filter(reservation => reservation.id !== currentReservationId));}

    // Mostra o alerta de cancelamento
    setShowCancellationAlert(true);
    setTimeout(() => setShowCancellationAlert(false), 2000); // Fecha após 5 segundos
    setIsOpen(false); // Fecha o modal após a confirmação
  };


  return (
    <div className="flex flex-col min-h-screen">
      <NavbarLogged />
      <div className="mt-16">
        <AnimatePresence>
          {showAlert && renderAlert("Sua reserva foi efetuada com sucesso!", showAlert, () => setShowAlert(false))}
          {showCancellationAlert && renderAlert("Sua reserva foi cancelada com sucesso!", showCancellationAlert, () => setShowCancellationAlert(false))}
        </AnimatePresence>
        <PriceBanner/>
      </div>

      <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-[#F0F4E8] to-[#E2F2CB] min-h-screen mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#45480F] mb-6">Minhas Reservas</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Card className="w-full lg:w-1/4">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-[#45480F]">Ativas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
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
                      <ImageIcon className="text-[#45480F] w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      <button
                        className="absolute top-4 right-4 text-[#9AB89A] transition-colors duration-200"
                        aria-label="Delete reservation"
                        onClick={() => setIsDeleteConfirmationOpen(true)}
                      >
                        <Trash2
                        onClick={() => {
                          setIsDeleteConfirmationOpen(true);
                          handleOpen(); // Abre o modal de confirmação antes de cancelar
                        }}
                        className="text-[#45480F] hover:text-[#606A0F] w-6 h-6" />
                      </button>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-2 text-[#4A6741] line-clamp-2">{reservation.items}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-[#4A6741]">
                          <p className="text-sm font-semibold">{reservation.date}</p>
                        </div>
                        <div className="flex items-center text-[#4A6741]">
                          <p className="text-lg font-bold">{reservation.currency} {reservation.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="w-full lg:w-2/3">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-[#45480F]">Histórico</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {historyItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2 flex justify-between items-center rounded-[8px] flex overflow-hidden ${
                      item.status === 'highlighted' ? 'bg-[#FF9B9B]' : 'bg-white border border-[#9B470180]'
                    }`}
                  >
                    <div className="flex justify-start items-center flex-1 min-w-0">
                      <ImageIcon className="w-8 h-8 mr-3 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-lg truncate">{item.items}</p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl text-[#45480F] font-semibold">R${item.price.toFixed(2)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Confirmação Necessária"
        confirmText="Confirmar"
        cancelText="Cancelar"
        description="Tem certeza de que deseja cancelar essa reserva?"
      />
      <Footer />
    </div>
  );
}
