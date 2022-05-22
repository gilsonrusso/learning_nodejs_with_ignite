import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/Specifications/SpecificationsRepository.impl";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

export const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", async (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationUseCase(
    specificationsRepository
  );

  createSpecificationService.execute({ name, description });

  return response
    .status(201)
    .json({ message: "Specification created successfully" });
});

specificationsRoutes.get("/", async (request, response) => {
  const all = await specificationsRepository.list();
  return response.status(200).json(all);
});
