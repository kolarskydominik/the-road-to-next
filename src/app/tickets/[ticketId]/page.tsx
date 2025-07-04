// import Link from 'next/link';
import { notFound } from 'next/navigation';
// import { Placeholder } from '@/components/placeholder';
// import { Button } from '@/components/ui/button';
import TicketItem from '@/features/ticket/components/ticket-item';
import { getTicket } from '@/features/ticket/queries/get-ticket';
// import { ticketsPath } from '@/paths';

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    return notFound();
    // (
    //   <Placeholder
    //     label="Ticket not found"
    //     button={
    //       <Button asChild variant={'outline'}>
    //         <Link href={ticketsPath()}>Go to tickets</Link>
    //       </Button>
    //     }
    //   />
    // );
  }
  return (
    <div className="animate-fade-from-top flex justify-center">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
