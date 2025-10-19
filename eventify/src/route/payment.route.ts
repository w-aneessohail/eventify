import * as express from "express";
import { PaymentController } from "../controller/payment.controller";

const Router = express.Router();

Router.get("/payments", PaymentController.getAllPayments);
Router.get("/payments/:id", PaymentController.getPaymentById);
Router.post("/payments", PaymentController.createPayment);
Router.put("/payments/:id", PaymentController.updatePayment);
Router.delete("/payments/:id", PaymentController.deletePayment);

export { Router as paymentRouter };
