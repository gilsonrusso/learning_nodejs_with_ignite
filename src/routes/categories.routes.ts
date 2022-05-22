import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
// import { PostgresCategoriesRepository } from "../repositories/PostgresCategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepositoy = new CategoriesRepository();
// const categoriesRepositoy = new PostgresCategoriesRepository();

categoriesRoutes.post("/", async (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepositoy);

  createCategoryService.execute({ name, description });

  return response
    .status(201)
    .json({ message: "Category created successfully" });
});

categoriesRoutes.get("/", async (request, response) => {
  const all = await categoriesRepositoy.list();

  return response.status(200).json(all);
});

export { categoriesRoutes };
