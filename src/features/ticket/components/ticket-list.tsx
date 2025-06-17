import { getTickets } from '../queries/get-tickets';
import TicketItem from './ticket-item';

const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <ul className="animate-fade-from-top flex flex-1 flex-col items-center gap-y-4">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </ul>
  );
};

export default TicketList;
