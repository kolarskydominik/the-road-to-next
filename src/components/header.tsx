import { LucideKanban } from 'lucide-react';
import Link from 'next/link';
import { homePath, ticketsPath } from '@/paths';
import { Button } from './ui/button';

export const Header = () => {
  return (
    <nav
      className="bg-background/60 fixed top-0 right-0 left-0 z-20 flex w-full justify-between
        border-b px-5 py-2.5 backdrop-blur"
    >
      <Button asChild variant={'ghost'}>
        <Link href={homePath()}>
          <LucideKanban className="stroke-3" />
          <h1 className="text-lg font-semibold">TicketBounty</h1>
        </Link>
      </Button>
      <Button asChild variant={'default'}>
        <Link href={ticketsPath()}>Tickets</Link>
      </Button>
    </nav>
  );
};
