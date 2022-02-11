import type { RequestHandler } from 'express';

declare global {
  interface RouteHandlerProperty extends PropertyDescriptor {
    value?: RequestHandler
  }
}
