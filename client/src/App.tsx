import { useRoutes } from 'react-router-dom';
import { AppLayout } from './components';
import { Paths } from './settings';
import {
  CreateHeroPage,
  HeroDetailsPage,
  HomePage,
  NotFoundPage,
} from './pages';

function App() {
  const element = useRoutes([
    {
      path: Paths.index,
      element: <AppLayout />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: Paths.details.index,
          element: <HeroDetailsPage />,
        },
        {
          path: Paths.create.index,
          element: <CreateHeroPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return <>{element}</>;
}

export default App;
