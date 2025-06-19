import { getLinksFromPaths } from '@/utils';

/**
 * Relative application URL paths
 */

export const Paths = {
  index: '/',
  superhero: {
    index: 'superheroes',
    create: {
      index: 'create',
    },
    edit: {
      index: 'edit',
    },
    details: ':id',
  },
  notFound: '404',
} as const;

/**
 * Absolute application URL paths
 */

export const Links = getLinksFromPaths(Paths);
