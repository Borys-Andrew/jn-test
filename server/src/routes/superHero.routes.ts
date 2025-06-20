import { Router } from 'express';
import {
  getAllHeroes,
  getHeroById,
  createHero,
  updateHero,
  deleteHero,
  getHeroBySearch,
} from '../controllers/superHero.controller';

const router = Router();

router.get('/', getAllHeroes);
router.get('/:id', getHeroById);
router.get('/search/:name', getHeroBySearch);
router.post('/', createHero);
router.put('/:id', updateHero);
router.delete('/:id', deleteHero);

export default router;
