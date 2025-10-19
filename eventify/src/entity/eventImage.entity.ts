import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "event_images" })
export class EventImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  imageUrl: string;

  @Column({ nullable: true })
  caption: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
