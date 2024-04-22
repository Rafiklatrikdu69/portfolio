/* eslint-disable prettier/prettier */
import { Column ,Entity,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Competence {
    @PrimaryGeneratedColumn()
    id_competence: number;
    @Column()
    nom_competence: string;
    @Column()
    description: string;

}


