import { ClassConstructor } from 'class-transformer';
import { RequestHandler } from 'express';
import 'reflect-metadata';
import { AppRouter } from '../app-router';
import { BodyValidtorMiddleware } from '../middlewares/body-validator.middleware';
import { MetdataKeys, Methods } from './constants';

export function controller(routePrefix?: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (const key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetdataKeys.Path,
        target.prototype,
        key
      ) as string | undefined;
      const method = Reflect.getMetadata(
        MetdataKeys.Method,
        target.prototype,
        key
      ) as Methods | undefined;

      const dto = Reflect.getMetadata(
        MetdataKeys.Validator,
        target.prototype,
        key
      );

      const middlewares = Reflect.getMetadata(
        MetdataKeys.Middlewares,
        target.prototype,
        key
      ) as RequestHandler[] | undefined;

      if (typeof path === 'string' && method) {
        const fullPath = `/${routePrefix ?? ''}/${path}`.replace(
          /\/{2,}/g,
          '/'
        );
        router[method](fullPath, ...(middlewares ?? []), BodyValidtorMiddleware(dto), routeHandler);
      }
    }
  };
}
