import { NextFunction, Request, Response } from "express";

export function Example (req: Request, res: Response, next: NextFunction) {
  console.log(req.body);
  next();
}