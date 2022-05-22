import { SpecificationsRepository } from "../../../repositories/Specifications/SpecificationsRepository.impl";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

const specificationRepository = SpecificationsRepository.getSpecification();
const listSpecificationUseCase = new ListSpecificationUseCase(
  specificationRepository
);
export const listSpecificationController = new ListSpecificationController(
  listSpecificationUseCase
);
