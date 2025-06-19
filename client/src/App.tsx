import { useRoutes } from 'react-router-dom';
import { AppLayout } from './components';
import { Paths } from './settings';
import {
  CreateHeroPage,
  HeroDetailsPage,
  HeroesPage,
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
          path: Paths.superhero.index,
          element: <HeroesPage />,
        },
        {
          path: Paths.superhero.details,
          element: <HeroDetailsPage />,
        },
        {
          path: Paths.superhero.create.index,
          element: <CreateHeroPage />,
        },
      ],
    },
    { path: '*', element: <NotFoundPage /> },
  ]);

  return <>{element}</>;
}

export default App;
