import { Projet } from "src/projet/entities/projet.entity";

/* eslint-disable prettier/prettier */
export class CreateCompetenceDto {
    id_competence: string;

    nom_competence: string;
  
    description: string;
  
    listeProjet: Projet[];
}
