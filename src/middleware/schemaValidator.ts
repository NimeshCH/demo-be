import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import AppError from "../utils/app-error";

export const validate =
  (schema: Joi.Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(new AppError(422, error.details[0].message));
    } else {
      next();
    }
  };
