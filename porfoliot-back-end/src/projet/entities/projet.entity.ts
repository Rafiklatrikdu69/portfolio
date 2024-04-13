/* eslint-disable */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Projet  {
  @PrimaryGeneratedColumn()
  id_projet: number;

  @Column()
  nom_projet: string;

  @Column()
  description: string;

  @Column()
  date: Date;
  @Column()
  image : string;
}