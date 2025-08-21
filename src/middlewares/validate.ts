import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const validatorMiddleware =
  (schema: z.Schema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error: any) {
      return res.status(400).json({ error: error.errors || error.message });
    }
  };

export default validatorMiddleware;
