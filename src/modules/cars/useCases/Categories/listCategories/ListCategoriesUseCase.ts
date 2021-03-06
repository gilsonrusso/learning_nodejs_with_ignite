import { Category } from "../../../model/Category";
import { ICategoriesRepository } from "../../../repositories/Categories/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}
