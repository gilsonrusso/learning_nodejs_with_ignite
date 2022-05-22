import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepositoy";

const categoriesRoutes = Router();
const categoriesRepositoy = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesRepositoy.create({ name, description });

  return response
    .status(201)
    .json({ message: "Category created successfully" });
});

export { categoriesRoutes };
