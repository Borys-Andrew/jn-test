import React from 'react';
import { Hero } from '@/types';
import { HeroCard } from './heroCard';

type HeroeslistProps = {
  heroes: Hero[];
};
export const HeroesList: React.FC<HeroeslistProps> = ({ heroes }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
      {heroes.map(hero => (
        <li key={hero.id}>
          <HeroCard hero={hero} />
        </li>
      ))}
    </ul>
  );
};
