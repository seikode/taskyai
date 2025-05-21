/**
 * Node modules
 */
import { Outlet } from 'react-router';

/**
 * Components
 */
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RootLayout = () => {
  return (
    <>
      <div className='min-h-[100vh] flex flex-col overflow-hidden'>
        <Header />

        <main className='grow grid grid-cols-1 items-center pt-36 pb-16'>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
