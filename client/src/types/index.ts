export type RelativePaths = {
  index: string;
  [key: string]: RelativePaths | string;
};

export type MapRelativePathsToAbsolute<
  Obj extends RelativePaths,
  Prefix extends string = '',
> = {
  [Property in keyof Obj]: Obj[Property] extends string
    ? Obj[Property] extends '/'
      ? '/'
      : Property extends 'index'
        ? Prefix
        : `${Prefix}/${Obj[Property]}`
    : Obj[Property] extends RelativePaths
      ? MapRelativePathsToAbsolute<
          Obj[Property],
          `${Prefix}/${Obj[Property]['index']}`
        >
      : never;
};

export type Hero = {
  _id?: string;
  id?: string;
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string[];
  catch_phrase: string;
  images: string[];
  createdAt?: string;
  updatedAt?: string;
};

export type PaginatedResults<T> = {
  page: number;
  limit: number;
  totalResults: number;
  totalPages: number;
  data: T[];
};
