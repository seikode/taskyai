/**
 * Node modules
 */
import { Outlet } from 'react-router';

/**
 * Components
 */
import Header from '@/components/Header';

const RootLayout = () => {
  return (
    <>
      <div className=''>
        <Header />
      </div>
    </>
  );
};

export default RootLayout;
