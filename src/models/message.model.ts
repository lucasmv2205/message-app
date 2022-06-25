import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MessageModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 800 })
  message: string;

  @Column({ length: 255 })
  email: string;
}