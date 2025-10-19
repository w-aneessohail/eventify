import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { VerificationStatus } from "../enum/verificationStatus.enum";

@Entity({ name: "organizers" })
export class Organizer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  organizationName: string;

  @Column({ nullable: false })
  organizerName: string;

  @Column({ nullable: false })
  cnic: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  address: string;

  @Column({
    type: "enum",
    enum: VerificationStatus,
    default: VerificationStatus.PENDING,
  })
  verificationStatus: VerificationStatus;

  @Column({ nullable: true })
  verifiedBy: number;

  @Column({ type: "timestamp", nullable: true })
  verifiedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
