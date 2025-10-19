import * as express from "express";
import { UserController } from "../controller/user.controller";

const Router = express.Router();

Router.get("/users", UserController.getAllUsers);
Router.get("/users/:id", UserController.getUserById);
Router.post("/users", UserController.createUser);
Router.put("/users/:id", UserController.updateUser);
Router.delete("/users/:id", UserController.deleteUser);

export { Router as userRouter };