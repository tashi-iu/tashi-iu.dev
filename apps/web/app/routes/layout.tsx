import { Outlet } from 'react-router';
import Footer from 'components/ui/footer';
import Header from 'components/ui/header';
import { BackgroundGradientAnimation } from 'components/ui/background-gradient-animation';

export default function Layout() {
  return (
    <div className='h-full w-full relative'>
      <BackgroundGradientAnimation containerClassName='absolute top-0 left-0'></BackgroundGradientAnimation>
      <div className='h-full flex flex-col'>
        <Header />
        <main className='flex-1'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
