import { Response } from 'express';

const responseFormatter = <T>(
  res: Response,
  code: number,
  message: string,
  data: T
): void => {
  res.status(code).send({
    status: code === 200 ? 'success' : 'error',
    message,
    data,
  });
};

export default responseFormatter;
