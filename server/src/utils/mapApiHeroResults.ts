import { SuperHeroApi } from '../types/express';

export const mapApiHeroResults = (apiHero: SuperHeroApi) => {
  const fullName = apiHero.biography?.['full-name'] || 'Unknown';
  const placeOfBirth =
    apiHero.biography?.['place-of-birth'] !== '-'
      ? apiHero.biography?.['place-of-birth']
      : 'an unknown location';
  const firstAppearance =
    apiHero.biography?.['first-appearance'] !== '-'
      ? apiHero.biography?.['first-appearance']
      : 'an unspecified comic';
  const publisher = apiHero.biography?.publisher || 'an unknown publisher';
  const aliases = apiHero.biography?.aliases?.filter(a => a !== '-') || [];
  const alias = aliases.length
    ? aliases[0]
    : apiHero.biography?.['alter-egos'] !== '-'
      ? apiHero.biography?.['alter-egos']
      : 'No alias';

  const originDescription =
    `The hero known as ${apiHero.name}, real name ${fullName}, was born in ${placeOfBirth}. ` +
    `They first appeared in ${firstAppearance}, published by ${publisher}. ` +
    `Also known as ${alias}, this character continues to fight for good.`;

  return {
    id: apiHero.id,
    nickname: apiHero.name,
    real_name: fullName,
    origin_description: originDescription,
    superpowers: Object.entries(apiHero.powerstats || {}).map(([key]) => key),
    catch_phrase: alias,
    images: [apiHero.image?.url].filter(Boolean),
  };
};
