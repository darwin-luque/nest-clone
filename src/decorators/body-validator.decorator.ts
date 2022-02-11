import { ClassConstructor } from 'class-transformer';
import 'reflect-metadata';
import { MetdataKeys } from './constants';

export function bodyValidator<T>(dto: ClassConstructor<T>) {
  return function (target: Object, key: string, desc: RouteHandlerProperty) {
    Reflect.defineMetadata(MetdataKeys.Validator, dto, target, key);
  }
}
