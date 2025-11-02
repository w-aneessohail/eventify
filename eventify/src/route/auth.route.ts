import * as express from "express";

import { AuthController } from "../controller/auth.controller";

const Router = express.Router();

Router.post("/login", AuthController.loginUser);

Router.post("/register", AuthController.registerUser);

Router.post("/verify-otp", AuthController.verifyOtp);

Router.post("/forgot-password", AuthController.forgotPassword);

Router.post("/reset-password", AuthController.resetPassword);

Router.post("/logout", AuthController.logoutUser);

export { Router as authRouter };
