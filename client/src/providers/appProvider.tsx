import { ReactNode } from 'react';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './themeProviderContext';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/api';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  );
};
