import React from 'react';
import { Hero } from '@/types';
import { Button, Card, CardContent, CardFooter } from '../../../components';

type HeroCardProps = {
  hero: Hero;
};

export const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  const { images, nickname } = hero;
  return (
    <Card className="py-2 flex flex-col gap-1 shadow hover:shadow-lg transition-shadow group">
      <CardContent className="px-2">
        <img
          src={
            images[0] ||
            'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
          }
          alt={nickname}
          className="w-full h-56 object-cover rounded-xl"
        />
      </CardContent>
      <CardFooter className="px-2 flex justify-between">
        <h3 className="font-semibold">{nickname}</h3>
        <Button
          onClick={() => alert(`Details for ${nickname}`)}
          className="cursor-pointer px-0"
          variant="link"
          size="sm"
        >
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};
