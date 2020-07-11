import { ErrorRequestHandler } from 'express';

import responseFormatter from '../utils/responseFormatter';
import logger from '../utils/logger';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(error);
  if (error.response) {
    if (error.response.status === '429') {
      return responseFormatter(
        res,
        503,
        'The server is busy at the moment, please try again later',
        null
      );
    }
    return responseFormatter(
      res,
      Number.parseInt(error.response.status, 10),
      error.response.data.message,
      null
    );
  }
  if (error.request) {
    logger.warn(error.request);
  }

  logger.error(error.message);
  logger.error(error.stack);
  return responseFormatter(
    res,
    500,
    'Something failed, we are investigating!',
    null
  );
};

export default errorHandler;
