import Link from 'next/link';
import { initialTickets } from '@/data';
import { ticketsPath } from '@/paths';

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((t) => t.id === ticketId);

  if (!ticket) {
    return <div>Ticket not found</div>;
  }
  return (
    <div>
      <div>{ticket.title}</div>
      <div>{ticket.content}</div>
      <div>{ticket.status}</div>

      <Link href={ticketsPath()} className="underline">
        Back to tickets
      </Link>
    </div>
  );
};

export default TicketPage;
