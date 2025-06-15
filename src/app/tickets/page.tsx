import { LucideCircleCheck, LucideFileText, LucidePencil } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { initialTickets } from '@/data';
import { ticketPath } from '@/paths';

const TICKETS_ICONS = {
  DONE: <LucideCircleCheck />,
  OPEN: <LucideFileText />,
  IN_PROGRESS: <LucidePencil />,
};

const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tickets</h2>
        <p className="text-muted-foreground text-sm">
          All your tickets at one place
        </p>
      </div>

      <Separator />

      <ul className="animate-fade-from-top flex flex-1 flex-col items-center gap-y-4">
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>{TICKETS_ICONS[ticket.status]}</span>
                <span className="truncate text-xl">{ticket.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3 whitespace-break-spaces">
                {ticket.content}
              </p>
            </CardContent>
            <CardFooter>
              <Link href={ticketPath(ticket.id)} className="underline">
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default TicketsPage;
