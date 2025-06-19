import { Outlet } from 'react-router-dom';

import { Footer } from './footer';
import { Header } from './header';

export const AppLayout = () => {
  return (
    <body>
      <Header />
      <main className="flex flex-col flex-1 px-4 w-screen">
        <Outlet />
      </main>
      <Footer />
    </body>
  );
};
