import * as express from "express";
import { EventController } from "../controller/event.controller";

const Router = express.Router();

Router.get("/events", EventController.getAllEvents);
Router.get("/events/:id", EventController.getEventById);
Router.post("/events", EventController.createEvent);
Router.put("/events/:id", EventController.updateEvent);
Router.delete("/events/:id", EventController.deleteEvent);

export { Router as eventRouter };
