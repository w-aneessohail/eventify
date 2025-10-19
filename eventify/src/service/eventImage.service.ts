import { Repository } from "typeorm";
import { EventImage } from "../entity/eventImage.entity";

export class EventImageService {
  constructor(private eventImageRepository: Repository<EventImage>) {}

  // eventImageService.ts
  async addImages(
    eventId: number,
    images: { imageUrl: string; caption?: string }[]
  ) {
    const imageEntities = images.map((img) =>
      this.eventImageRepository.create({ ...img, event: { id: eventId } })
    );
    return this.eventImageRepository.save(imageEntities);
  }

  async deleteImagesByEvent(eventId: number): Promise<void> {
    await this.eventImageRepository.delete({ event: { id: eventId } });
  }
}
