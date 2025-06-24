import React from 'react';
import { Hero } from '@/types';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Separator,
  Button,
  ImagesCarousel,
} from '@/components';
import { Edit2, Trash } from 'lucide-react';

type HeroViewCardProps = {
  hero: Hero;
  onDelete: () => void;
  onEdit: () => void;
};

export const HeroViewCard: React.FC<HeroViewCardProps> = ({
  hero,
  onDelete,
  onEdit,
}) => {
  return (
    <Card className="overflow-hidden shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center h-full">
          <div className="flex flex-col">
            <CardTitle className="text-3xl">{hero.nickname}</CardTitle>
            <CardDescription>Real Name: {hero.real_name}</CardDescription>
          </div>
          <div className="hidden md:flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer"
              onClick={() => onEdit()}
            >
              <Edit2 />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              className="cursor-pointe"
              onClick={() => onDelete()}
            >
              <Trash />
            </Button>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col md:flex-row gap-5">
        <div className="flex-shrink-0 w-[375px]">
          <ImagesCarousel images={hero.images} />
        </div>

        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Origin Description:</h3>
            <p className="text-muted-foreground">{hero.origin_description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Superpowers:</h3>
            <div className="flex flex-wrap gap-2">
              {hero.superpowers?.map((power, i) => (
                <Badge key={i} variant="outline">
                  {power}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Catch Phrase:</h3>
            <p className="italic">“{hero.catch_phrase}”</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-5 md:hidden">
        <Button
          variant="outline"
          className="cursor-pointer flex-1"
          onClick={() => onEdit()}
        >
          <Edit2 />
          Edit
        </Button>

        <Button
          variant="destructive"
          className="cursor-pointer flex-1"
          onClick={() => onDelete()}
        >
          <Trash />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
