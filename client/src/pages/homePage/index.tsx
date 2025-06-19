import { heroesAPI } from '@/api';
import { useQuery } from '@tanstack/react-query';

export const HomePage = () => {
  const page = 1;
  const limit = 5;

  const { data } = useQuery({
    ...heroesAPI.getHeroListQueryOptions({
      page,
      limit,
    }),
  });

  console.log('🚀 ~ HomePage ~ data:', data);
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-7">
      <p>Here will list of Heroes with pagination </p>
    </div>
  );
};
