import express, { type Request, type Response, type Express } from "express";
import { config } from "./config/config.ts";
import { v1 } from "./routes/v1/index.ts";
import cors from "cors";

export const CreateServer = (): Express => {
    const app = express();
    app.use(express.json()).use(cors());

    app.get("/", (_req: Request, res: Response) => {
        res.json({ Ok: true, environment: config.NODE_ENV });
    });
    app.use("/v1", v1);
    return app;
};
