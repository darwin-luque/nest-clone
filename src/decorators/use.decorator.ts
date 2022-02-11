import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetdataKeys } from './constants';

export function use(...middlewares: RequestHandler[]) {
  return function (target: Object, key: string, desc: RouteHandlerProperty) {
    Reflect.defineMetadata(MetdataKeys.Middlewares, middlewares, target, key);
  }
}
