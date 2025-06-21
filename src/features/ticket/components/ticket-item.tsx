import { Ticket } from '@prisma/client';
import { LucideSquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ticketPath } from '@/paths';
import { TICKETS_ICONS } from '../constants';

type Props = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: Props) => {
  const detailButton = (
    <Button variant={'outline'} size={'icon'} asChild>
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="size-4" />
      </Link>
    </Button>
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
      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">{detailButton}</div>
      )}
    </div>
  );
};

export default TicketItem;
