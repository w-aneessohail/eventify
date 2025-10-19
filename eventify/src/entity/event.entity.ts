import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { VerificationStatus } from "../enum/verificationStatus.enum";

@Entity({ name: "events" })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  title: string;

  @Column({ type: "text", nullable: false })
  description: string;

  @Column({ type: "text", nullable: false })
  address: string;

  @Column({ type: "date", nullable: false })
  eventDate: Date;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  ticketPrice: number;

  @Column({ type: "int", nullable: false })
  totalTickets: number;

  @Column({ type: "int", nullable: false })
  availableTickets: number;

  @Column({
    type: "enum",
    enum: VerificationStatus,
    default: VerificationStatus.PENDING,
  })
  status: VerificationStatus;

  @Column({ nullable: true })
  verifiedBy: number;

  @Column({ type: "timestamp", nullable: true })
  verifiedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
