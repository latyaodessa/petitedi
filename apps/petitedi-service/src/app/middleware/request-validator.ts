import { AnySchema } from 'yup';
import { NextFunction, Request, Response } from 'express';
import { logger } from '@petitedi/common/common-utils';

const validate = (schema: AnySchema) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params
    });

    return next();
  } catch (e) {
    logger.error(e);
    return res.status(400).send(e.errors);
  }
};

export default validate;
