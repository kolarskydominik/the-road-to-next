import { initialTickets } from '@/data';
import { TicketType } from '../types';

export const getTicket = async (id: string): Promise<TicketType | null> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  const maybeTicket = initialTickets.find((t) => t.id === id);

  return new Promise((resolve) => {
    resolve(maybeTicket || null);
  });
};
