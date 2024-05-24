import { Competence } from "./Competence";
import { Niveau } from "./Niveau";

export class Semestre {
    id_semestre!:number;
    nom_semestre!:string;
    competences!:Competence[];
    niveauCompetence!:Niveau
    constructor(id_semestre:number,nom_semestre:string, competences:Competence[],niveauCompetence:Niveau) {
        this.id_semestre = id_semestre;
        this.nom_semestre = nom_semestre;
        this.competences = competences;
    }
}