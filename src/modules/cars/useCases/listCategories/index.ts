import { CategoriesRepository } from "../../repositories/Categories/CategoriesRepository.impl";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoryRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
export const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);
