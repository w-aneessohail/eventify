import { IsNotEmpty, IsOptional, Length } from "class-validator";

export class CreateOrganizerDto {
  @IsNotEmpty({ message: "Organization name is required" })
  @Length(3, 100, { message: "Organization name must be between 3 and 100 characters" })
  organizationName: string;

  @IsOptional()
  @Length(10, 200, { message: "Description must be between 10 and 200 characters" })
  description?: string;

  @IsNotEmpty({ message: "Contact number is required" })
  @Length(10, 15, { message: "Contact number must be between 10 and 15 digits" })
  contactNumber: string;
}

export class UpdateOrganizerDto {
  @IsOptional()
  organizationName?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  contactNumber?: string;
}