export class BookingResponseDto {
  id: number;
  eventId: number;
  userId: number;
  ticketCount: number;
  totalAmount: number;
  createdAt: string;

  constructor(booking: any) {
    this.id = booking.id;
    this.eventId = booking.eventId;
    this.userId = booking.userId;
    this.ticketCount = booking.ticketCount;
    this.totalAmount = booking.totalAmount;
    this.createdAt = booking.createdAt;
  }
}
