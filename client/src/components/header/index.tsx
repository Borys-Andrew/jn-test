import Logo from '@/assets/Logo.svg?react';
import { Icon } from '../icon';
import { ThemeToggle } from '../themeToggle';

export const Header = () => {
  return (
    <header className="w-screen border-b">
      <div className="flex items-center justify-between py-5 px-4">
        <Icon icon={Logo} title="Company Logo" className="h-10 w-fit" />
        <ThemeToggle />
      </div>
    </header>
  );
};
