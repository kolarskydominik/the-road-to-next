import { Suspense } from 'react';
import { Heading } from '@/components/heading';
import Loader from '@/components/loader';
import TicketList from '@/features/ticket/components/ticket-list';

const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />

      {/* <ErrorBoundary fallback={<Placeholder label="Something went wrong" />}> */}
      <Suspense fallback={<Loader />}>
        <TicketList />
      </Suspense>
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default TicketsPage;
