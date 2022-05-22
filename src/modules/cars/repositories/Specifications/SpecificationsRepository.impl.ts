import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "./ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }

  async list(): Promise<Specification[]> {
    return this.specifications;
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = new Specification();
    Object.assign(specification, { name, description });
    this.specifications.push(specification);
  }
}
