import { RequestHandler } from 'express';

import responseFormatter from '../utils/responseFormatter';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFound: RequestHandler = (req, res, next) => {
  return responseFormatter(res, 404, 'api end points not found', null);
};

export default notFound;
