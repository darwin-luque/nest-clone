import 'reflect-metadata';
import type { RequestHandler } from 'express';
import { MetdataKeys, Methods } from './constants';

interface RouteHandlerProperty extends PropertyDescriptor {
  value?: RequestHandler
}

export function get(path?: string) {
  return function(target: Object, key: string, desc: RouteHandlerProperty) {
    Reflect.defineMetadata(MetdataKeys.Path, path ?? '', target, key);
    Reflect.defineMetadata(MetdataKeys.Method, Methods.Get, target, key);
  }
};
