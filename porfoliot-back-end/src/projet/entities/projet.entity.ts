/* eslint-disable */
import { Competence } from 'src/competence/entities/competence.entity';
import { Technology } from '../../technologies/entities/technology.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';

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

  @Column()
  git: string;

  @Column()
  descriptionplus:string;

  @ManyToMany(() => Technology, (techno: Technology) => techno.projets)
 
  @JoinTable({
    name: 'projet_techno', 
    joinColumn: { name: 'projet_id', referencedColumnName: 'id_projet' },
    inverseJoinColumn: { name: 'techno_id', referencedColumnName: 'id_techno' } 
  })
  technos: Technology[];
  @ManyToOne(() => Competence, (competence: Competence) => competence.projet)
  @JoinColumn({name: 'projet_id'})
  projetCompetence:Competence;
  @Column()
  universitaire:boolean;
}
