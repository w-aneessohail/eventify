import * as express from "express";
import { BookingController } from "../controller/booking.controller";
import { UserRole } from "../enum/userRole.enum";
import { authentication } from "../middleware/authentication";
import { authorization } from "../middleware/authorization";

const Router = express.Router();

Router.get(
  "/bookings",
  authentication,
  authorization([UserRole.ADMIN, UserRole.ORGANIZER]),
  BookingController.getAllBookings
);
Router.get("/bookings/:id", authentication, BookingController.getBookingById);
Router.post(
  "/bookings",
  authentication,
  authorization([UserRole.ATTENDEE]),
  BookingController.createBooking
);
Router.put(
  "/bookings/:id",
  authentication,
  authorization([UserRole.ATTENDEE]),
  BookingController.updateBooking
);
Router.delete(
  "/bookings/:id",
  authentication,
  authorization([UserRole.ADMIN]),
  BookingController.deleteBooking
);

export { Router as bookingRouter };
