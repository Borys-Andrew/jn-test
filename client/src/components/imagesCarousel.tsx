import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/utils';
import { XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ImagesCarouselProps = {
  images: string[];
  onDelete?: (img: string) => void;
  mode?: 'edit' | 'create';
};

//   // const images = [
//   //   'https://www.superherodb.com/pictures2/portraits/10/100/10831.jpg',
//   //   // 'https://www.superherodb.com/pictures2/portraits/10/100/891.jpg',
//   //   // 'https://www.superherodb.com/pictures2/portraits/10/100/1345.jpg',
//   //   // 'https://www.superherodb.com/pictures2/portraits/10/100/893.jpg',
//   //   // 'https://www.superherodb.com/pictures2/portraits/10/100/894.jpg',
//   // ];

export const ImagesCarousel: React.FC<ImagesCarouselProps> = ({
  images,
  onDelete,
  mode,
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const isImages = images.length > 0;

  useEffect(() => {
    if (!api) return;

    api.reInit();
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
  }, [images.length, api]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {isImages ? (
            images.map((img, index) => (
              <CarouselItem key={img}>
                <Card className="py-0 relative">
                  <CardContent className="w-[375px] h-[400px] md:h-[500px] px-0 flex items-center justify-center">
                    <img
                      src={img}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </CardContent>
                  {mode && (
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-3 right-3 cursor-pointer"
                      onClick={() => onDelete?.(img)}
                    >
                      <XIcon />
                    </Button>
                  )}
                </Card>
              </CarouselItem>
            ))
          ) : (
            <CarouselItem>
              <Card className="py-0 max-w-[375px]">
                <CardContent className="w-[375px] h-[400px] md:h-[500px] flex items-center justify-center px-0">
                  <span className="text-4xl font-semibold text-muted-foreground">
                    {mode ? 'Add Image' : 'No image found'}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          )}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-2 mt-2 w-full">
        {isImages &&
          Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={cn(
                'h-3 w-3 rounded-full transition-colors duration-200',
                current === index + 1 ? 'bg-primary' : 'bg-muted-foreground'
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
      </div>
    </>
  );
};
