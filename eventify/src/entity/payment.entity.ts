import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { PaymentMethod } from "../enum/paymentMethod.enum";
import { PaymentStatus } from "../enum/paymentStatus.enum";

@Entity({ name: "payments" })
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  amount: number;

  @Column({
    type: "enum",
    enum: PaymentMethod,
    default: PaymentMethod.BANK_TRANSFER,
  })
  method: PaymentMethod;

  @Column({
    type: "enum",
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  status: PaymentStatus;

  @Column({ nullable: false })
  transactionId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
