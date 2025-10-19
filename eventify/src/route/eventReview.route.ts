import * as express from "express";
import { EventReviewController } from "../controller/eventReview.controller";

const router = express.Router();

router.get("/event-reviews", EventReviewController.getAllReviews);
router.get("/event-reviews/:id", EventReviewController.getReviewById);
router.post("/event-reviews", EventReviewController.createReview);
router.put("/event-reviews/:id", EventReviewController.updateReview);
router.delete("/event-reviews/:id", EventReviewController.deleteReview);

export { router as eventReviewRouter };
