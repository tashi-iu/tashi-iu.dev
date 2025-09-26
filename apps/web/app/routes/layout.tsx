import { Outlet } from 'react-router';
import Footer from 'components/ui/footer';
import Header from 'components/ui/header';
import { BackgroundGradientAnimation } from 'components/ui/background-gradient-animation';

export default function Layout() {
  return (
    <BackgroundGradientAnimation>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </BackgroundGradientAnimation>
  );
}
