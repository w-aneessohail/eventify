import { Repository } from "typeorm";
import { Category } from "../entity/category.entity";

export class CategoryService {
  constructor(private categoryRepository: Repository<Category>) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find({
      relations: ["events"],
    });
  }

  async findById(id: number): Promise<Category | null> {
    return this.categoryRepository.findOne({
      where: { id },
      relations: ["events"],
    });
  }

  async createCategory(categoryData: Partial<Category>): Promise<Category> {
    const category = this.categoryRepository.create(categoryData);
    return this.categoryRepository.save(category);
  }

  async updateCategory(
    id: number,
    categoryData: Partial<Category>
  ): Promise<Category | null> {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) return null;

    this.categoryRepository.merge(category, categoryData);
    return this.categoryRepository.save(category);
  }

  async deleteCategory(id: number): Promise<boolean> {
    const result = await this.categoryRepository.delete({ id });
    return result.affected !== 0;
  }
}
