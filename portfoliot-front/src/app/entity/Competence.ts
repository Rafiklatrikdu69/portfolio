import { Niveau } from "./Niveau";
import { Projet } from "./projet";

export class Competence{
    id_competence!:number;
    nom_competence!:string;
    description!:string;
    projet!:Projet;
    niveauCompetence!:Niveau
    constructor(
        id_competence:number,
        nom_competence:string,
        description:string, 
        listeProjet:Projet,
        niveauCompetence:Niveau
    ){
        this.id_competence = id_competence;
        this.nom_competence = nom_competence;
        this.description = description;
        this.projet = listeProjet;
        this.niveauCompetence = niveauCompetence;
    }
}