export interface CreateHeroBody {
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  images?: string[];
}

export interface UpdateHeroBody extends Partial<CreateHeroBody> {}

export interface HeroResponse {
  _id: string;
  nickname: string;
  image?: string | null;
}
