import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    await this.importCategoryUseCase.execute(file);

    return response
      .status(200)
      .json({ message: "Import Category created successfully" });
  }
}
