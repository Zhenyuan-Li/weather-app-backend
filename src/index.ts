import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import weatherRoutes from './routes/weather';
import errorHandler from './middlewares/errorHandler';
import notFound from './middlewares/notFound';

dotenv.config();
const port = process.env.PORT;

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('common'));
}

app.use(weatherRoutes);
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
