import React from 'react';
import { Button } from '@/components';
import { HeroesList, PaginationHeroes } from './components';
import { useHomePage } from './hooks';

export const HomePage: React.FC = () => {
  const {
    heroes,
    limit,
    page,
    totalPages,
    handlePageChange,
    handleLimitChange,
    handleCreate,
    renderFallback,
  } = useHomePage();

  const fallback = renderFallback();
  if (fallback) {
    return <div className="py-6 max-w-5xl mx-auto">{fallback}</div>;
  }

  if (!heroes) return null;

  return (
    <div className="flex flex-col flex-1 gap-6 py-7">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">List of Heroes</h1>
        <Button onClick={handleCreate}>Add Hero</Button>
      </div>

      <div className="flex flex-col gap-5 flex-1">
        <HeroesList heroes={heroes} />

        <div className="mt-auto">
          <PaginationHeroes
            limit={limit}
            currenPage={page}
            totalPages={totalPages}
            onHandleLimitChange={handleLimitChange}
            onHandlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};
