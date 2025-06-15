export type TicketState = 'OPEN' | 'DONE' | 'IN_PROGRESS';

export type TicketType = {
  id: string;
  title: string;
  content: string;
  status: TicketState;
};
