import { Request, Response, NextFunction } from 'express';
import * as service from '../services/superHero.service';
import { CreateHeroBody, UpdateHeroBody } from '../types/express';

export const getAllHeroes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const result = await service.getAll(page);
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

export const createHero = async (
  req: Request<{}, {}, CreateHeroBody>,
  res: Response,
  next: NextFunction
) => {
  try {
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
