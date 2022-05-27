import csv from "csv-parser";
import fs from "fs";

import { ICategoriesRepository } from "../../../repositories/Categories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

export class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  async loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = csv();
      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          categories.push({ ...line });
        })
        .on("end", () => {
          fs.promises.unlink(file.path); // unlink reponsaval por remover um arquivo.
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map(async (category) => {
      const name = Object.keys(category)[0];
      const description = Object.values(category)[0];
      const existsCategory = await this.categoryRepository.findByName(name);
      if (!existsCategory) {
        this.categoryRepository.create({ name, description });
      }
    });
  }
}
