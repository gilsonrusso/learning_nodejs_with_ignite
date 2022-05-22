import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/Specifications/createSpecification";

export const specificationsRoutes = Router();

specificationsRoutes.post("/", async (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", async (request, response) => {
  // const all = await specificationsRepository.list();
  // return response.status(200).json(all);
});
