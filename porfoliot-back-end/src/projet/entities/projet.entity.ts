/* eslint-disable */
import { Technology } from '../../technologies/entities/technology.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Projet {
  @PrimaryGeneratedColumn()
  id_projet: number;

  @Column()
  nom_projet: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  image: string;

  @ManyToMany(() => Technology, (techno: Technology) => techno.projets)
  @JoinTable({
    name: 'projet_techno', 
    joinColumn: { name: 'projet_id', referencedColumnName: 'id_projet' },
    inverseJoinColumn: { name: 'techno_id', referencedColumnName: 'id_techno' } 
  })
  technos: Technology[];
}
