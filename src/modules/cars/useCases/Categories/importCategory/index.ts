import { CategoriesRepository } from "../../../repositories/Categories/CategoriesRepository.impl";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(
  importCategoryRepository
);
export const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);
