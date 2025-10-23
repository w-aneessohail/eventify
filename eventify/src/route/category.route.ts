import * as express from "express";
import { CategoryController } from "../controller/category.controller";
import { authentication } from "../middleware/authentication";
import { UserRole } from "../enum/userRole.enum";
import { authorization } from "../middleware/authorization";

const Router = express.Router();

Router.get("/categories", CategoryController.getAllCategories);
Router.get("/categories/:id", CategoryController.getCategoryById);
Router.post(
  "/categories",
  authentication,
  authorization([UserRole.ADMIN]),
  CategoryController.createCategory
);
Router.put(
  "/categories/:id",
  authentication,
  authorization([UserRole.ADMIN]),
  CategoryController.updateCategory
);
Router.delete(
  "/categories/:id",
  authentication,
  authorization([UserRole.ADMIN]),
  CategoryController.deleteCategory
);

export { Router as categoryRouter };
