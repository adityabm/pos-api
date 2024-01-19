import express from "express";
import { apiRoute } from "../routes/api.js";
import { errorMiddleware } from "../middlewares/errorMiddleware.js";

export const web = express();
web.use(express.json());

web.use(apiRoute);
web.use(errorMiddleware);
