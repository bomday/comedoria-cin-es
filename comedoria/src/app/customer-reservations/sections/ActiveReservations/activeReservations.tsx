import { motion } from 'framer-motion';
import { Trash2, Image as ImageIcon, Calendar, DollarSign } from 'lucide-react';

interface Reservation {
  id: string;
  items: string;
  date: string;
  price: number;
  currency: string;
}

interface ActiveReservationsProps {
  reservations: Reservation[];
  onDelete: (id: string) => void;
}

const ActiveReservations: React.FC<ActiveReservationsProps> = ({ reservations, onDelete }) => {
  return (
    <div className="w-full lg:w-1/4">
      <h2 className="text-3xl font-semibold text-[#45480F]">Ativas</h2>
      <div className="space-y-4">
        {reservations.map((reservation) => (
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
                onClick={() => onDelete(reservation.id)}
              >
                <Trash2 className="text-[#45480F] hover:text-[#606A0F] w-6 h-6" />
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2 text-[#4A6741]">{reservation.items}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-[#4A6741]">
                  <Calendar className="w-4 h-4 mr-1" />
                  <p className="text-sm font-semibold">{reservation.date}</p>
                </div>
                <div className="flex items-center text-[#4A6741]">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <p className="text-lg font-bold">{reservation.currency} {reservation.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ActiveReservations;
