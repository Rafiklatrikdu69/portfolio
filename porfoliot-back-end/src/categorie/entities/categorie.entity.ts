/* eslint-disable prettier/prettier */

/* eslint-disable */
import { Technology } from '../../technologies/entities/technology.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';

@Entity()
export class Categorie {
  @PrimaryGeneratedColumn()
  id_cat: number;

  @Column()
  nom_cat: string;

  @OneToMany(() => Technology, (techno: Technology) => techno.categorie)
  technos: Technology[];
}