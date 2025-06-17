'use client';

import { useEffect, useState } from 'react';
import { Heading } from '@/components/heading';
import TicketItem from '@/features/ticket/components/ticket-item';
import { getTickets } from '@/features/ticket/queries/get-tickets';
import { TicketType } from '@/features/ticket/types';

const TicketsPage = () => {
  const [tickets, setTickets] = useState<TicketType[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const tickets = await getTickets();
      setTickets(tickets);
    };

    fetchTickets();
  }, []);
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />

      <ul className="animate-fade-from-top flex flex-1 flex-col items-center gap-y-4">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </ul>
    </div>
  );
};

export default TicketsPage;
