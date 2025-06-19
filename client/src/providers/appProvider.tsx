import { ReactNode } from 'react';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './themeProviderContext';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
};
