import { Repository } from "typeorm";
import { EventImage } from "../entity/eventImage.entity";

export class EventImageService {
  constructor(private eventImageRepository: Repository<EventImage>) {}

  // ✅ Add multiple images to an event
  async addImages(
    eventId: number,
    images: { imageUrl: string; caption?: string }[]
  ) {
    const imageEntities = images.map((img) =>
      this.eventImageRepository.create({ ...img, event: { id: eventId } })
    );
    return this.eventImageRepository.save(imageEntities);
  }

  // ✅ Delete all images linked to a specific event
  async deleteImagesByEvent(eventId: number): Promise<void> {
    await this.eventImageRepository.delete({ event: { id: eventId } });
  }

  // ✅ Find all images for a specific event
  async findAllByEvent(eventId: number): Promise<EventImage[]> {
    return this.eventImageRepository.find({
      where: { event: { id: eventId } },
      relations: ["event"],
    });
  }

  // ✅ Find a single image by its ID
  async findById(imageId: number): Promise<EventImage | null> {
    return this.eventImageRepository.findOne({
      where: { id: imageId },
      relations: ["event"],
    });
  }

  // ✅ Update image details (caption or URL)
  async updateImage(
    imageId: number,
    updateData: Partial<{ imageUrl: string; caption: string }>
  ): Promise<EventImage | null> {
    const existingImage = await this.eventImageRepository.findOne({
      where: { id: imageId },
    });

    if (!existingImage) {
      return null;
    }

    // merge existing + new data
    const updatedImage = this.eventImageRepository.merge(existingImage, updateData);
    return this.eventImageRepository.save(updatedImage);
  }
}
