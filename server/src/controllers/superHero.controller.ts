import { Request, Response, NextFunction } from 'express';
import * as service from '../services/superHero.service';
import { CreateHeroBody, UpdateHeroBody } from '../types/express';
import SuperHero from '../models/superHero';

export const getAllHeroes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string);
    const limit = parseInt(req.query.limit as string);

    const result = await service.getAll(page, limit);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getHeroById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await service.getById(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getHeroBySearch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.params;
    const hero = await service.getSearchQueryHero(name);

    res.json(hero);
  } catch (error) {
    next(error);
  }
};

export const createHero = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { nickname, real_name } = req.body as Partial<CreateHeroBody>;

    const existingHero = await SuperHero.findOne({
      $or: [{ nickname }, { real_name }],
    });

    if (existingHero) {
      return res.status(400).json({
        message: `Hero with nickname "${nickname}" or real name "${real_name}" already exists`,
      });
    }

    const result = await service.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateHero = async (
  req: Request<{ id: string }, {}, UpdateHeroBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await service.update(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteHero = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await service.remove(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
