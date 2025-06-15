export const initialTickets = [
  {
    id: '1',
    title: 'Ticket 1',
    content: 'This is a ticket',
    status: 'DONE' as const,
  },
  {
    id: '2',
    title: 'Ticket 2',
    content: 'This is another ticket',
    status: 'OPEN' as const,
  },
  {
    id: '3',
    title: 'Ticket 3',
    content: 'This is yet another ticket',
    status: 'IN_PROGRESS' as const,
  },
];
