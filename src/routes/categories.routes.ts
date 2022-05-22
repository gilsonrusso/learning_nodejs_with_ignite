import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/Categories/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/Categories/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", async (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", async (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
