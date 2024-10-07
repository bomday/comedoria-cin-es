import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

interface HistoryItem {
  id: string;
  items: string;
  price: number;
  date: string;
  status: 'normal' | 'highlighted';
}

interface ReservationHistoryProps {
  items: HistoryItem[];
}

const ReservationHistory: React.FC<ReservationHistoryProps> = ({ items }) => {
  return (
    <div className="w-full lg:w-2/3">
      <h2 className="text-3xl font-semibold text-[#45480F]">Histórico</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-4 flex justify-between items-center rounded-[8px] flex overflow-hidden ${
              item.status === 'highlighted' ? 'bg-[#FF9B9B]' : 'bg-white border border-[#9B470180]'
            }`}
          >
            <div className="flex justify-start items-center flex-wrap">
              <ImageIcon className="w-10 h-10 mr-4" />
              <div>
                <p className="font-medium text-lg">{item.items}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl text-[#45480F] font-semibold">{item.price.toFixed(2)} €</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ReservationHistory;
