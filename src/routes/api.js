import express from "express";
import userController from "../controllers/userController.js";
import customerController from "../controllers/customerController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const apiRoute = new express.Router();

apiRoute.post(
  "/api/v1/user/create",
  [authMiddleware],
  userController.createUser
);
apiRoute.post("/api/v1/login", userController.login);

apiRoute.post(
  "/api/v1/customer/create",
  [authMiddleware],
  customerController.createCustomer
);

export { apiRoute };
