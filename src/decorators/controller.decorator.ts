import 'reflect-metadata';
import { AppRouter } from '../app-router';
import { MetdataKeys, Methods } from './constants';

export function controller(routePrefix?: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();

    for (const key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(MetdataKeys.Path, target.prototype, key) as string | undefined;
      const method = Reflect.getMetadata(MetdataKeys.Method, target.prototype, key) as Methods | undefined;

      console.log(path, method);

      if (typeof path === 'string' && method) {
        const fullPath = `/${routePrefix ?? ''}/${path}`.replace(/\/{2,}/g, '/');
        router[method](fullPath, routeHandler);
      }
    }
  }
}
