import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks';
import { Button } from './ui/button';

export const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="cursor-pointer"
    >
      <Moon className="size-6 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Sun className="absolute size-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
};
