import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

export class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Promise<Category> {
    console.log(name);
    return null;
  }
  list(): Promise<Category[]> {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): Promise<void> {
    console.log(name, description);
    return null;
  }
}
