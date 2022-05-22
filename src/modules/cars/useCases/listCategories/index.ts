import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoryRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
export const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);
