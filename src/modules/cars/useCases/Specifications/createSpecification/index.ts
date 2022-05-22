import { SpecificationsRepository } from "../../../repositories/Specifications/SpecificationsRepository.impl";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getSpecification();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);
export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
