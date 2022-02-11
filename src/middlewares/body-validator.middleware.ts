import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

export function BodyValidtorMiddleware<
  E,
  D extends ClassConstructor<E>,
  T extends ClassConstructor<D>
>(dto?: T) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      if (dto) {
        const parsedBody = plainToClass(dto, req.body);
        await validateOrReject(parsedBody);
      }
      return next();
    } catch (err) {
      res.status(400).send(err);
    }
  };
}
