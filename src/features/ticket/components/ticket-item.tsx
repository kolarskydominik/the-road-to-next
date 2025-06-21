import { LucideSquareArrowOutUpRight, LucideTrash } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ticketPath } from '@/paths';
import { deleteTicket } from '../actions/delete-ticket';
import { TICKETS_ICONS } from '../constants';
import { getTicket } from '../queries/get-ticket';
import { getTickets } from '../queries/get-tickets';

type TicketType =
  | Awaited<ReturnType<typeof getTicket>>
  | Awaited<ReturnType<typeof getTickets>>[number];

type Props = {
  ticket: TicketType;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: Props) => {
  if (!ticket) return null;

  const detailButton = (
    <Button variant={'outline'} size={'icon'} asChild>
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="size-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button variant={'outline'} size={'icon'} type="submit">
        <LucideTrash className="size-4" />
      </Button>
    </form>
  );

  return (
    <div
      className={cn(
        'flex w-full max-w-[420px] gap-x-1',
        isDetail && 'max-w-[580px]',
      )}
    >
      <Card key={ticket.id} className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>{TICKETS_ICONS[ticket.status]}</span>
            <span className="truncate text-xl">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className={cn(
              'whitespace-break-spaces',
              !isDetail && 'line-clamp-3',
            )}
          >
            {ticket.content}
          </p>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? deleteButton : detailButton}
      </div>
    </div>
  );
};

export default TicketItem;
