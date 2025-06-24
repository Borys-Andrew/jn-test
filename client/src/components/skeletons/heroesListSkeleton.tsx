// src/components/HeroesListSkeleton.tsx
import React from 'react';
import { Skeleton, Card, CardContent, CardFooter } from '@/components';

export const HeroesListSkeleton: React.FC = () => {
  const placeholders = Array.from({ length: 5 });

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full animate-pulse py-4">
      {placeholders.map((_, idx) => (
        <li key={idx}>
          <Card className="flex flex-col h-full shadow-sm py-2 px-2">
            <CardContent className="p-0">
              <Skeleton className="relative w-full pb-[150%] rounded-xl" />
            </CardContent>
            <CardFooter className="p-2 flex justify-between items-center">
              <Skeleton className="h-5 w-1/3 rounded-md" />
              <Skeleton className="h-5 w-12 rounded-md" />
            </CardFooter>
          </Card>
        </li>
      ))}
    </ul>
  );
};
