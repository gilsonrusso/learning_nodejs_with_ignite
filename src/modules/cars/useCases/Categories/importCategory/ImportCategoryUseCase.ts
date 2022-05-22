export class ImportCategoryUseCase {
  async execute(file: Express.Multer.File): Promise<void> {
    console.log(file);
  }
}
