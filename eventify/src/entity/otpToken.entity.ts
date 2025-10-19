import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { OtpPurpose } from "../enum/otpPurpose.enums";

@Entity({ name: "otp_tokens" })
export class OtpToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: OtpPurpose, nullable: false })
  purpose: OtpPurpose;

  @Column({ nullable: false })
  otpCode: string;

  @Column({ type: "timestamptz", nullable: false })
  expiresAt: Date;

  @Column({ type: "timestamptz", nullable: true })
  consumedAt: Date | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
