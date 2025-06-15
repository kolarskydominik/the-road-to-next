import Link from 'next/link';
import { initialTickets } from '@/data';
import { ticketPath } from '@/paths';

const TicketPage = () => {
  return (
    <div>
      <ul>
        {initialTickets.map((ticket) => (
          <li key={ticket.id} className="grid gap-2">
            <Link href={ticketPath(ticket.id)} className="underline">
              {ticket.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketPage;
