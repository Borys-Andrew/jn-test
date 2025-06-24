import React from 'react';
import { Hero } from '@/types';
import { Button, Card, CardContent, CardFooter } from '../../../components';
import { useNavigate } from 'react-router-dom';

type HeroCardProps = {
  hero: Hero;
};

export const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  const { images, nickname, _id } = hero;
  const navigate = useNavigate();

  return (
    <Card className="flex flex-col h-full shadow hover:shadow-lg transition-shadow py-2">
      <CardContent className="px-2">
        <div className="relative w-full pb-[150%] overflow-hidden rounded-xl">
          <img
            src={
              images[0] ||
              'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
            }
            alt={nickname}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </CardContent>

      <CardFooter className="px-2 flex justify-between items-center">
        <h3 className="font-semibold truncate text-lg">{nickname}</h3>
        <Button
          onClick={() => navigate(`/${_id}`)}
          variant="link"
          size="sm"
          className="px-0 text-lg cursor-pointer"
        >
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};
