/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Technology  {
  @PrimaryGeneratedColumn()
  id_techno: number;

  @Column()
  nom_techno: string;
  @Column()
  image_techno: string;

}

