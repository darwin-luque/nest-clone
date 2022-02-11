import { Request, Response } from 'express';
import { bodyValidator } from '../decorators/body-validator.decorator';
import { controller } from '../decorators/controller.decorator';
import { get, post } from '../decorators/routes.decorator';
import { use } from '../decorators/use.decorator';
import { LoginDto } from '../dto/login.dto';
import { Example } from '../middlewares/example.middleware';

@controller('/login')
export class LoginController {
  @get('/sign-in')
  signIn(req: Request, res: Response) {
    res.status(200).send(`
    <form method="POST">
      <label for="email">Email</label>
      <input id="email" name="email" value="" placeholder="Email"> 
      <br>
      <label for="Password">Password</label>
      <input id="password" name="password" type="password" value="" placeholder="***********"> 
      <br>
      <input type="submit">
    </form>
    `);
  }

  @post('/sign-in')
  @bodyValidator(LoginDto)
  @use(Example)
  setUser(req: Request, res: Response) {
    res.status(200).send(`Thank you for your information`);
  }
}
