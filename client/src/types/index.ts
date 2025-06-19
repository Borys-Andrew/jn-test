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
