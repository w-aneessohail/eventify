import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity({ name: "event_reviews" })
  export class EventReview {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: "int", nullable: false })
    rating: number;
  
    @Column({ type: "text", nullable: true })
    comment: string;
  
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;


  }
  