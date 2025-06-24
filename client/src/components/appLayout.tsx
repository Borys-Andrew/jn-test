import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Footer } from './footer';
import { Header } from './header';
import { Button } from '@/components';
import { ArrowLeft } from 'lucide-react';
import { Toaster } from '@/components/ui/sonner';

export const AppLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const showBack = location.pathname !== '/';

  return (
    <body>
      <Header />
      <main className="relative flex flex-col flex-1 px-4 w-screen overflow-y-auto">
        {showBack && (
          <div className="absolute -top-3 -left-3">
            <Button
              variant="link"
              onClick={() => navigate(-1)}
              aria-label="Go back"
              className="cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" /> Back
            </Button>
          </div>
        )}
        <Outlet />
        <Toaster />
      </main>
      <Footer />
    </body>
  );
};
