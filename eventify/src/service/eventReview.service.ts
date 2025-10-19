import { Repository } from "typeorm";
import { EventReview } from "../entity/eventReview.entity";

export class EventReviewService {
  constructor(private reviewRepository: Repository<EventReview>) {}

  async findAll(): Promise<EventReview[]> {
    return this.reviewRepository.find({
      relations: ["event", "user"],
    });
  }

  async findById(id: number): Promise<EventReview | null> {
    return this.reviewRepository.findOne({
      where: { id },
      relations: ["event", "user"],
    });
  }

  async createReview(reviewData: Partial<EventReview>): Promise<EventReview> {
    const review = this.reviewRepository.create(reviewData);
    return this.reviewRepository.save(review);
  }

  async updateReview(
    id: number,
    reviewData: Partial<EventReview>
  ): Promise<EventReview | null> {
    const review = await this.reviewRepository.findOne({ where: { id } });
    if (!review) return null;

    this.reviewRepository.merge(review, reviewData);
    await this.reviewRepository.save(review);
    return this.findById(id);
  }

  async deleteReview(id: number): Promise<boolean> {
    const result = await this.reviewRepository.delete({ id });
    return result.affected !== 0;
  }
}
