export class EventResponseDto {
  id: number;
  title: string;
  description: string;
  address: string;
  eventDate: string;
  ticketPrice: number;
  totalTickets: number;
  status: string;
  organizerId: number;

  constructor(event: any) {
    this.id = event.id;
    this.title = event.title;
    this.description = event.description;
    this.address = event.address;
    this.eventDate = event.eventDate;
    this.ticketPrice = event.ticketPrice;
    this.totalTickets = event.totalTickets;
    this.status = event.status;
    this.organizerId = event.organizerId;
  }
}
