import React from 'react';
import { Hero } from '@/types';
import { HeroCard } from './heroCard';

type HeroesListProps = {
  heroes: Hero[];
};

export const HeroesList: React.FC<HeroesListProps> = ({ heroes }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
      {heroes.map(hero => (
        <li key={hero._id}>
          <HeroCard hero={hero} />
        </li>
      ))}
    </ul>
  );
};
