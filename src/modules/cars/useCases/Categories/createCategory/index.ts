import { CategoriesRepository } from "../../../repositories/Categories/CategoriesRepository.impl";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoryRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
