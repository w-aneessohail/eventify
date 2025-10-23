export class OrganizerResponseDto {
  id: number;
  organizationName: string;
  description?: string | null;
  contactNumber: string;
  userId: number;

  constructor(organizer: any) {
    this.id = organizer.id;
    this.organizationName = organizer.organizationName;
    this.description = organizer.description ?? null;
    this.contactNumber = organizer.contactNumber;
    this.userId = organizer.userId;
  }
}