import SuperHero from '../models/superHero';
import { CreateHeroBody, UpdateHeroBody } from '../types/express';
import createHttpError from 'http-errors';

export const getAll = async (page: number) => {
  const limit = 5;
  const skip = (page - 1) * limit;
  const heroes = await SuperHero.find().skip(skip).limit(limit);
  const total = await SuperHero.countDocuments();

  return {
    page,
    totalPages: Math.ceil(total / limit),
    data: heroes,
  };
};

export const getById = async (id: string) => {
  const hero = await SuperHero.findById(id);
  if (!hero) throw createHttpError(404, 'Hero not found');
  return hero;
};

export const create = async (data: CreateHeroBody) => {
  return SuperHero.create(data);
};

export const update = async (id: string, data: UpdateHeroBody) => {
  const hero = await SuperHero.findByIdAndUpdate(id, data, { new: true });
  if (!hero) throw createHttpError(404, 'Hero not found');
  return hero;
};

export const remove = async (id: string) => {
  const hero = await SuperHero.findByIdAndDelete(id);
  if (!hero) throw createHttpError(404, 'Hero not found');
  return hero;
};
