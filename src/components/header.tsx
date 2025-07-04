import { LucideKanban } from 'lucide-react';
import Link from 'next/link';
import { homePath, ticketsPath } from '@/paths';
import { ThemeSwitcher } from './theme/theme-switcher';
import { Button } from './ui/button';

export const Header = () => {
  return (
    <nav
      className="bg-background/60 fixed top-0 right-0 left-0 z-20 flex w-full justify-between
        border-b px-5 py-2.5 backdrop-blur"
    >
      <div className="flex gap-x-2">
        <Button asChild variant={'ghost'}>
          <Link href={homePath()}>
            <LucideKanban className="stroke-3" />
            <h1 className="text-lg font-semibold">TicketBounty</h1>
          </Link>
        </Button>
      </div>
      <div className="flex gap-x-2">
        <ThemeSwitcher />
        <Button
          asChild
          variant={'default'}
          className="dark:text-foreground font-semibold"
        >
          <Link href={ticketsPath()}>Tickets</Link>
        </Button>
      </div>
    </nav>
  );
};
