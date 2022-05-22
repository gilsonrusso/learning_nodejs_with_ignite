import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepositoy = new CategoriesRepository();

categoriesRoutes.post("/", async (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = await categoriesRepositoy.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "Category already exists" });
  }

  await categoriesRepositoy.create({ name, description });

  return response
    .status(201)
    .json({ message: "Category created successfully" });
});

categoriesRoutes.get("/", async (request, response) => {
  const all = await categoriesRepositoy.list();

  return response.status(200).json(all);
});

export { categoriesRoutes };
