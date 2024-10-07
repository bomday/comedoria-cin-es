import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table'; // Ajuste a importação conforme necessário

interface Reservation {
  _id: string;
  customer: {
    name: string; // Supondo que o objeto 'customer' tenha um campo 'name'
  };
  order: string;
  shift: string;
  status: boolean; // Adicione outros campos conforme necessário
}

const ReservationTable = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('/api/reservations');
        if (!response.ok) {
          throw new Error('Failed to fetch reservations');
        }
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Shift</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow key={reservation._id}>
              <TableCell>{reservation._id}</TableCell>
              <TableCell>{reservation.customer.name}</TableCell>
              <TableCell>{reservation.order}</TableCell>
              <TableCell>{reservation.shift}</TableCell>
              <TableCell>{reservation.status ? 'Confirmed' : 'Pending'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
};

export default ReservationTable;
