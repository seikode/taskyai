/**
 * Node modules
 */
import { isRouteErrorResponse, Link, useRouteError } from 'react-router';

/**
 * Components
 */
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { pageNotFound } from '@/assets';

const RootErrorBoundary = () => {
  const error = useRouteError();
  return (
    <div className='min-h-[100dvh] flex flex-col'>
      <Header />

      <div
        className='grow container flex flex-col items-center justify-center 
      pt-32 pb-12'
      >
        <h1 className='text-2xl font-semibold text-center sm:text-4xl'>
          {isRouteErrorResponse(error)
            ? "Hmmm, that page doesn't exist."
            : 'Something went wrong!'}
        </h1>

        <p
          className='text-muted-foreground max-w-[55ch] text-center mt-4 mb-6
        sm:text-lg'
        >
          {isRouteErrorResponse(error)
            ? 'You can get back on track and manage your tasks with ease.'
            : "We're working on fixing this issue. Please try again later."}
        </p>

        <div className='flex gap-2'>
          <Button asChild>
            <Link to='/'>Go to Home</Link>
          </Button>

          <Button
            asChild
            variant='ghost'
          >
            <Link to='/app/inbox'>View Inbox</Link>
          </Button>
        </div>

        <figure className='mt-10'>
          <img
            src={pageNotFound}
            width={560}
            height={373}
            alt='404 page not found'
          />
        </figure>
      </div>

      <Footer />
    </div>
  );
};

export default RootErrorBoundary;
