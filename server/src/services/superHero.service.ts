import SuperHero from '../models/superHero';
import { CreateHeroBody, UpdateHeroBody } from '../types/express';
import createHttpError from 'http-errors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { mapApiHeroResults } from '../utils/mapApiHeroResults';

dotenv.config();

const SUPERHERO_URL = process.env.SUPERHERO_API_BASE_URL;

export const getAll = async (page: number, limit = 5) => {
  const skip = (page - 1) * limit;
  const heroes = await SuperHero.find().skip(skip).limit(limit);
  const total = await SuperHero.countDocuments();

  return {
    page,
    limit,
    totalResults: total,
    totalPages: Math.ceil(total / limit),
    data: heroes,
  };
};

export const getById = async (id: string) => {
  console.log('qwerty', id);

  const hero = await SuperHero.findById(id);
  if (!hero) throw createHttpError(404, 'Hero not found');
  return hero;
};

export const getSearchQueryHero = async (name: string) => {
  const response = await fetch(
    `${SUPERHERO_URL}/search/${encodeURIComponent(name)}`
  );
  const data = (await response.json()) as any;

  if (data.response === 'error' || !data.results || data.results.length === 0) {
    throw createHttpError(404, `No superhero found with name: ${name}`);
  }

  const results = data.results;

  return results.map((el: any) => mapApiHeroResults(el));
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
