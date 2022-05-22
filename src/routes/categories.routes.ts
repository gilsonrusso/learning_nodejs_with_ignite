import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepositoy = new CategoriesRepository();

categoriesRoutes.post("/", async (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", async (request, response) => {
  const all = await categoriesRepositoy.list();

  return response.status(200).json(all);
});

export { categoriesRoutes };
