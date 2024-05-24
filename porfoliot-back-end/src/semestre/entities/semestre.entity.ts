/* eslint-disable prettier/prettier */
import { Competence } from "src/competence/entities/competence.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

/* eslint-disable prettier/prettier */
@Entity()
export class Semestre {
    @PrimaryGeneratedColumn()
    id_semestre: number;
  
    @Column()
    nom_semestre: string;
  
    @OneToMany(() => Competence, (competence: Competence) => competence.semestreCompetence)
    competences: Competence[];
}
