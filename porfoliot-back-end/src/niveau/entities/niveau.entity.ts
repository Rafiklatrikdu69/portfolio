/* eslint-disable prettier/prettier */
import { ApprentissageCritique } from "src/apprentissage-critique/entities/apprentissage-critique.entity";
import { Competence } from "src/competence/entities/competence.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Niveau {
    @PrimaryGeneratedColumn()
    id_niveau: number;
    @Column()
    nom_niveau: string;
    @OneToMany(() => ApprentissageCritique, (apprentissage: ApprentissageCritique) => apprentissage.semestreCompetence)
     apprentissages: ApprentissageCritique[];
    @OneToMany(() => Competence, (competence: Competence) => competence.niveauCompetence)
    @JoinColumn({name: 'id_competence'})
    competenceNiveau:Competence[];
}
