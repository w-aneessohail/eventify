import { IsNumber, IsNotEmpty } from "class-validator";

export class CreateBookingDto {
  @IsNumber({}, { message: "Event ID must be a number" })
  eventId: number;

  @IsNumber({}, { message: "User ID must be a number" })
  userId: number;

  @IsNotEmpty({ message: "Number of tickets is required" })
  ticketCount: number;
}
