import { Request, Response } from 'express';
import { controller } from '../decorators/controller.decorator';
import { get } from '../decorators/routes.decorator';

@controller()
export class RootController {
  @get()
  root(req: Request, res: Response) {
    res.status(200).send(`
      <div>
        <h1>Hello World from our NestJS Clone</h1>
      </div>
    `);
  }
}
