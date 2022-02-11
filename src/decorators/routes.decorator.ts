import 'reflect-metadata';
import type { RequestHandler } from 'express';
import { MetdataKeys, Methods } from './constants';

interface RouteHandlerProperty extends PropertyDescriptor {
  value?: RequestHandler
}

function baseRoutes(method: Methods) {
  return function (path?: string) {
    return function(target: Object, key: string, desc: RouteHandlerProperty) {
      Reflect.defineMetadata(MetdataKeys.Path, path ?? '', target, key);
      Reflect.defineMetadata(MetdataKeys.Method, method, target, key);
    }
  }
}

export const get = baseRoutes(Methods.Get);
export const put = baseRoutes(Methods.Put);
export const post = baseRoutes(Methods.Post);
export const patch = baseRoutes(Methods.Patch);
export const del = baseRoutes(Methods.Delete);
