import { Projet } from "./projet";

export class Competence{
    id_competence!:number;
    nom_competence!:string;
    description!:string;
    listeProjet!:Projet[];
    constructor(
        id_competence:number,
        nom_competence:string,
        description:string, 
        listeProjet:Projet[]
    ){
        this.id_competence = id_competence;
        this.nom_competence = nom_competence;
        this.description = description;
        this.listeProjet = listeProjet;
    }
}