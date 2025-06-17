import { initialTickets } from '@/data';
import { TicketType } from '../types';

export const getTickets = async (): Promise<TicketType[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(initialTickets);
  });
};
