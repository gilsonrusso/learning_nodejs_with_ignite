import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "./ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationRepository {
  private specification: Specification[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.specification = [];
  }

  public static getSpecification(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.specification.find(
      (specification) => specification.name === name
    );
    return specification;
  }

  async list(): Promise<Specification[]> {
    return this.specification;
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = new Specification();
    Object.assign(specification, { name, description });
    this.specification.push(specification);
  }
}
