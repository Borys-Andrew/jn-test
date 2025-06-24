import { queryOptions } from '@tanstack/react-query';
import { jsonApiInstance } from './apiInstance';
import { Hero, PaginatedResults } from '@/types';
import { QUERY_KEYS } from '@/constants';

export const heroesAPI = {
  getHeroListQueryOptions: ({
    page,
    limit,
  }: {
    page: number;
    limit: number;
  }) => {
    return queryOptions({
      queryKey: [QUERY_KEYS.HEROES, { page, limit }],
      queryFn: meta =>
        jsonApiInstance<PaginatedResults<Hero>>(
          `/superheroes?page=${page}&limit=${limit}`,
          {
            signal: meta.signal,
          }
        ),
    });
  },

  getSearchQueryHero: ({
    name,
    signal,
  }: {
    name: string;
    signal?: AbortSignal;
  }) => {
    return jsonApiInstance<Hero[]>(
      `/superheroes/search/${encodeURIComponent(name)}`,
      {
        signal,
      }
    );
  },

  getHeroById: ({ id }: { id: string }) => {
    return jsonApiInstance<Hero>(`/superheroes/${id}`);
  },

  createHero: ({
    data,
    meta,
  }: {
    data: Hero;
    meta?: { signal?: AbortSignal };
  }) => {
    return jsonApiInstance<Hero>('/superheroes', {
      method: 'POST',
      json: data,
      signal: meta?.signal,
    });
  },

  updateHero: ({ id, data }: { id: string; data: Partial<Hero> }) => {
    return jsonApiInstance<Hero>(`/superheroes/${id}`, {
      method: 'PUT',
      json: data,
    });
  },

  removeHero: ({ id }: { id: string }) => {
    return jsonApiInstance<Hero>(`/superheroes/${id}`, {
      method: 'DELETE',
    });
  },
};
