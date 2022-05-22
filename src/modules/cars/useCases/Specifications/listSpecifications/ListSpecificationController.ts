import { Request, Response } from "express";

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

export class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const specifications = await this.listSpecificationUseCase.execute();
    return response.status(200).json(specifications);
  }
}
