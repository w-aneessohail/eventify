import { Repository } from "typeorm";
import { Booking } from "../entity/booking.entity";

export class BookingService {
  constructor(private bookingRepository: Repository<Booking>) {}

  async findAll(): Promise<Booking[]> {
    return this.bookingRepository.find({
      relations: ["event", "attendee", "payments"],
    });
  }

  async findById(id: number): Promise<Booking | null> {
    return this.bookingRepository.findOne({
      where: { id },
      relations: ["event", "attendee", "payments"],
    });
  }

  async createBooking(bookingData: Partial<Booking>): Promise<Booking> {
    const booking = this.bookingRepository.create(bookingData);
    return this.bookingRepository.save(booking);
  }

  async updateBooking(
    id: number,
    bookingData: Partial<Booking>
  ): Promise<Booking | null> {
    const booking = await this.bookingRepository.findOne({
      where: { id },
      relations: ["event", "attendee", "payments"],
    });

    if (!booking) return null;

    this.bookingRepository.merge(booking, bookingData);
    await this.bookingRepository.save(booking);
    return this.findById(id);
  }

  async deleteBooking(id: number): Promise<boolean> {
    const result = await this.bookingRepository.delete({ id });
    return result.affected !== 0;
  }
}
