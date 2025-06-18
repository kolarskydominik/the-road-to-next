import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const tickets = [
  {
    title: 'Ticket 1',
    content: 'This is a ticket from DB',
  },
  {
    title: 'Ticket 2',
    content: 'This is another ticket from DB',
  },
  {
    title: 'Ticket 3',
    content: 'This is yet another ticket from DB',
  },
];

const seed = async () => {
  console.time("DB Seeding");
  await prisma.ticket.deleteMany();
  await prisma.ticket.createMany({
    data: tickets,
  });
  console.timeEnd("DB Seeding");
};

seed();
