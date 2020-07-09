import dotenv from 'dotenv';
import express from 'express';

import weatherRoutes from './routes/weather';

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(weatherRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
