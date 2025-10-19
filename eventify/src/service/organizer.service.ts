import { Repository } from "typeorm";
import { Organizer } from "../entity/organizer.entity";

export class OrganizerService {
  constructor(private organizerRepository: Repository<Organizer>) {}

  async findAll(): Promise<Organizer[]> {
    return this.organizerRepository.find({
      relations: ["user", "events"],
    });
  }

  async findById(id: number): Promise<Organizer | null> {
    return this.organizerRepository.findOne({
      where: { id },
      relations: ["user", "events"],
    });
  }

  async createOrganizer(organizerData: Partial<Organizer>): Promise<Organizer> {
    const organizer = this.organizerRepository.create(organizerData);
    return this.organizerRepository.save(organizer);
  }

  async updateOrganizer(
    id: number,
    organizerData: Partial<Organizer>
  ): Promise<Organizer | null> {
    const organizer = await this.organizerRepository.findOneBy({ id });
    if (!organizer) return null;

    this.organizerRepository.merge(organizer, organizerData);
    await this.organizerRepository.save(organizer);
    return this.findById(id);
  }

  async deleteOrganizer(id: number): Promise<boolean> {
    const result = await this.organizerRepository.delete({ id });
    return result.affected !== 0;
  }
}
