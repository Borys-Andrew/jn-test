import { getLinksFromPaths } from '@/utils';

/**
 * Relative application URL paths
 */

export const Paths = {
  index: '/',
  details: {
    index: ':id',
  },
  create: {
    index: 'create',
  },
  edit: {
    index: 'edit',
  },
  notFound: '404',
} as const;

/**
 * Absolute application URL paths
 */

export const Links = getLinksFromPaths(Paths);
