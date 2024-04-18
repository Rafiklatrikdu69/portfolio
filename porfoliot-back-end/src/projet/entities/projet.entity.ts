/* eslint-disable */
import { Technology } from 'src/technologies/entities/technology.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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

  @OneToMany(() => Technology, (techno: Technology) => techno.id_techno, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  technos: Array<Technology>;
}