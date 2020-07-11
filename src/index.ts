import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import weatherRoutes from './routes/weather';
import errorHandler from './middlewares/errorHandler';
import notFound from './middlewares/notFound';
import logger from './utils/logger';

dotenv.config();

const port = process.env.PORT || 3000;

process.on('uncaughtException', (e) => {
  logger.error(e.message);
  process.exit(1);
});
process.on('unhandledRejection', (e) => {
  logger.error(e);
  process.exit(1);
});

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('common'));
}

app.use(helmet());
app.use(cors());
app.use(weatherRoutes);
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  logger.info(`Server is listening on port ${port}`);
});
