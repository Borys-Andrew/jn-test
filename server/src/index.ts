import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 5000;
const DB_HOST = process.env.DB_HOST || '';

mongoose
  .connect(DB_HOST)
  .then(() => console.log('DB conected successfully'))
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server is running on port http://localhost:${PORT}`);
    })
  )
  .catch(error => console.log(error.message));
