import Link from 'next/link';
import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
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
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant={'outline'}>
            <Link href={ticketsPath()}>Go to tickets</Link>
          </Button>
        }
      />
    );
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
