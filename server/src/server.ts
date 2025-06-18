import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || 3030;
const DB_HOST = process.env.DB_HOST || "";
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello from Express server!');
});

mongoose
  .connect(DB_HOST)
  .then(() => console.log('DB conected successfully'))
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server is running on port http://localhost:${PORT}`);
    }),
  )
  .catch((error) => console.log(error.message));
