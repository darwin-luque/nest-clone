import { Request, Response } from 'express';
import { controller } from '../decorators/controller.decorator';
import { get, post } from '../decorators/routes.decorator';

@controller('/login')
export class LoginController {
  @get('/sign-in')
  signIn(req: Request, res: Response) {
    res.status(200).send(`
    <form method="POST">
      <label for="email">Email</label>
      <input id="email" name="email" type="email" value="" placeholder="Email"> 
      <br>
      <label for="Password">Password</label>
      <input id="password" name="password" type="password" value="" placeholder="***********"> 
      <br>
      <input type="submit">
    </form>
    `);
  }

  @post('/sign-in')
  setUser(req: Request, res: Response) {
    console.log(req.body);
    res.status(200).send(`Thank you for your information`);
  }
}
