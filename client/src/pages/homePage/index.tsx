import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Links } from '@/settings';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-7">
      <h1 className="text-3xl font-bold">Welcome to the Superhero Base</h1>
      <p className="text-muted-foreground max-w-xl">
        Check out your favorite superheroes, learn more about their powers at,
        and add new ones to the database.
      </p>
      <Button
        onClick={() => navigate(Links.superhero.index)}
        className="cursor-pointer"
      >
        To Superheroes
      </Button>
    </div>
  );
};
