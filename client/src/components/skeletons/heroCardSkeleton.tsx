import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Separator,
  Skeleton,
} from '@/components';

export const HeroCardSkeleton = () => (
  <div className="p-6 max-w-5xl mx-auto w-full">
    <Card className="overflow-hidden shadow-md animate-pulse">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-8 w-48 rounded-md" />
            <Skeleton className="h-4 w-32 rounded-md" />
          </div>
          <div className="hidden md:flex gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col md:flex-row gap-5">
        <Skeleton className="flex-shrink-0 w-full md:w-[375px] h-[300px] md:h-[400px] rounded-xl" />
        <div className="flex flex-col space-y-4 flex-1">
          <Skeleton className="h-4 w-1/3 rounded-md" />
          <Skeleton className="h-4 w-2/3 rounded-md" />
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-12 rounded-full" />
          </div>
          <Skeleton className="h-4 w-1/2 rounded-md" />
        </div>
      </CardContent>
      <CardFooter className="flex gap-5 md:hidden">
        <Skeleton className="h-10 w-1/2 rounded-md flex-1" />
        <Skeleton className="h-10 w-1/2 rounded-md flex-1" />
      </CardFooter>
    </Card>
  </div>
);
