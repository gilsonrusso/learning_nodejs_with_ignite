import { Router } from "express";
import multer from "multer";
import path from "path";

import { createCategoryController } from "../modules/cars/useCases/Categories/createCategory";
import { importCategoryController } from "../modules/cars/useCases/Categories/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/Categories/listCategories";

export const categoriesRoutes = Router();

const upload = multer({
  dest: path.resolve(__dirname, "..", "..", "./tmp"),
});

categoriesRoutes.post("/", async (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", async (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  async (request, response) => {
    return importCategoryController.handle(request, response);
  }
);
