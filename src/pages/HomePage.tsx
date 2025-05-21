/**
 * Node modules
 */

/**
 * Components
 */
import Head from '@/components/Head';

const HomePage = () => {
  return (
    <>
      <Head title='Tasky AI - AI-Powered To-Do List & Project Management App' />
      <section>
        <div className=''>
          <div className=''>
            <h1 className=''>
              Simplify Your Work and Life with{' '}
              <span className=''>AI-Powered</span> Task Management.
            </h1>
            <p className=''>
              Simplify life for both you and your team with the world's #1 task
              manager and to-do list app.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
