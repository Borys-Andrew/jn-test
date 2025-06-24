import { Router } from 'express';
import {
  getAllHeroes,
  getHeroById,
  createHero,
  updateHero,
  handleDelete,
  getHeroBySearch,
} from '../controllers/superHero.controller';

const router = Router();

router.get('/', getAllHeroes);
router.get('/search/:name', getHeroBySearch);
router.get('/:id', getHeroById);
router.post('/', createHero);
router.put('/:id', updateHero);
router.delete('/:id', handleDelete);

export default router;
