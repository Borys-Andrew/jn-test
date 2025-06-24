import { heroesAPI } from '@/api';
import { DataNotFound, HeroesListSkeleton } from '@/components';
import { Paths } from '@/settings';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useHomePage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 5;

  const { data, isLoading, error } = useQuery({
    ...heroesAPI.getHeroListQueryOptions({ page, limit }),
  });

  const heroes = data?.data;
  const totalPages = data?.totalPages || 1;

  const handlePageChange = (newPage: string) => {
    setSearchParams({ page: newPage, limit: String(limit) });
  };

  const handleLimitChange = (newLimit: string) => {
    setSearchParams({ page: '1', limit: newLimit });
  };

  const handleCreate = () => {
    navigate(Paths.create.index);
  };

  const renderFallback = () => {
    if (isLoading) {
      return <HeroesListSkeleton />;
    }

    if (error || !data) {
      return (
        <DataNotFound
          title="Heroes Not Found"
          helperText="Smth wen wrong."
          action="reload"
        />
      );
    }
  };

  return {
    isLoading,
    heroes,
    limit,
    page,
    totalPages,
    handlePageChange,
    handleLimitChange,
    handleCreate,
    renderFallback,
  };
};
