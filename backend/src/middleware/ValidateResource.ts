import type { ZodTypeAny } from "zod";
import type { NextFunction, Request, Response } from "express";

const Validate =
    (schema: ZodTypeAny) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            next();
        } catch (error) {
            res.status(404).json({ error });
        }
    };
export default Validate;
