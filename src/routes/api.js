import express from "express";
import userController from "../controllers/userController.js";
import customerController from "../controllers/customerController.js";

const apiRoute = new express.Router();

apiRoute.post("/api/v1/user/create", userController.createUser);

apiRoute.post("/api/v1/customer/create", customerController.createCustomer);

export { apiRoute };
