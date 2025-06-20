import express from 'express';
import cors from 'cors';
import heroRoutes from './routes/superHero.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello from Express server!');
});

app.use(express.json());
app.use('/api/superheroes', heroRoutes);

export default app;
