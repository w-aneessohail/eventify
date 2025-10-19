import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { PaymentStatus } from "../enum/paymentStatus.enum";

@Entity({ name: "bookings" })
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int", nullable: false })
  quantity: number;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  totalAmount: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  bookingDate: Date;

  @Column({
    type: "enum",
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  status: PaymentStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
