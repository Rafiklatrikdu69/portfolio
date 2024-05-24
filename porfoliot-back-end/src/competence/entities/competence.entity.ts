/* eslint-disable prettier/prettier */
import { Niveau } from "src/niveau/entities/niveau.entity";
import { Projet } from "src/projet/entities/projet.entity";
import { Semestre } from "src/semestre/entities/semestre.entity";
import { Column ,Entity,JoinColumn,JoinTable,ManyToOne,OneToMany,OneToOne,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Competence {
    @PrimaryGeneratedColumn()
    id_competence: number;
    @Column()
    nom_competence: string;
    @Column()
    description: string;
    @OneToMany(() => Projet, projet => projet.projetCompetence)
    listeProjet: Projet[];
    @ManyToOne(() => Semestre, (semestre: Semestre) => semestre.competences)
    @JoinColumn({name: 'id_semestre'})
    semestreCompetence:Semestre;
    @ManyToOne(() => Niveau, (niveau: Niveau) => niveau.competenceNiveau)
    niveauCompetence:Niveau;
}


