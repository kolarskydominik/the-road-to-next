import './globals.css';
import { LucideKanban } from 'lucide-react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { homePath, ticketsPath } from '@/paths';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'The Road to Next',
  description: 'My road to learning Next',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
          <Button asChild variant={'outline'}>
            <Link href={ticketsPath()}>Tickets</Link>
          </Button>
        </nav>
        <main
          className="bg-secondary/20 flex min-h-svh flex-1 flex-col overflow-x-hidden overflow-y-auto
            px-8 py-24"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
