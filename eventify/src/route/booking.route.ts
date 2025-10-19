import * as express from "express";
import { BookingController } from "../controller/booking.controller";

const Router = express.Router();

Router.get("/bookings", BookingController.getAllBookings);
Router.get("/bookings/:id", BookingController.getBookingById);
Router.post("/bookings", BookingController.createBooking);
Router.put("/bookings/:id", BookingController.updateBooking);
Router.delete("/bookings/:id", BookingController.deleteBooking);

export { Router as bookingRouter };
