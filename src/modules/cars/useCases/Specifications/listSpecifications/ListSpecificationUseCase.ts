import { Specification } from "../../../model/Specification";
import { ISpecificationRepository } from "../../../repositories/Specifications/ISpecificationsRepository";

export class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}
  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationRepository.list();
    return specifications;
  }
}
