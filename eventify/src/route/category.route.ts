import * as express from "express";
import { CategoryController } from "../controller/category.controller";

const Router = express.Router();

Router.get("/categories", CategoryController.getAllCategories);
Router.get("/categories/:id", CategoryController.getCategoryById);
Router.post("/categories", CategoryController.createCategory);
Router.put("/categories/:id", CategoryController.updateCategory);
Router.delete("/categories/:id", CategoryController.deleteCategory);

export { Router as categoryRouter };
