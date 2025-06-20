import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { heroesAPI } from '@/api';

import { HeroesList, PaginationHeroes } from './components';

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 5;

  const { data, isLoading } = useQuery({
    ...heroesAPI.getHeroListQueryOptions({ page, limit }),
  });

  const heroes = data?.data;

  const totalResults = data?.totalResults || 0;
  console.log('🚀 ~ HomePage ~ totalResults:', totalResults);
  const totalPages = data?.totalPages || 1;

  const handlePageChange = (newPage: string) => {
    setSearchParams({ page: newPage, limit: String(limit) });
  };

  const handleLimitChange = (newLimit: string) => {
    console.log('🚀 ~ handleLimitChange ~ newLimit:', newLimit);

    setSearchParams({ page: '1', limit: newLimit });
  };

  if (!heroes) {
    return;
  }

  return (
    <div className="flex flex-col justify-between flex-1 gap-4 py-7">
      <p className="text-lg font-semibold">List of Heroes</p>
      {isLoading && <p>Loading heroes...</p>}
      <HeroesList heroes={heroes} />
      <PaginationHeroes
        limit={limit}
        currenPage={page}
        totalPages={totalPages}
        onHandleLimitChange={handleLimitChange}
        onHandlePageChange={handlePageChange}
      />
    </div>
  );
};
