import { Categorie } from "./Categorie";
import { Technology } from "./Technology";

export class Projet {
    date: string;
    description: string;
    id_projet: number;
    image: string;
    nom_projet: string;
    technos:Technology[];
    categorie:Categorie;
    git:string;
    descriptionplus:string;

    constructor(
        date: string, 
        description: string, 
        id_projet: number,
        image: string, 
        nom_projet: string,
        technos:Technology[],
        categorie:Categorie,
        git:string, 
        descriptionplus:string 
        ) {
        this.date = date;
        this.description = description;
        this.id_projet = id_projet;
        this.image = image;
        this.nom_projet = nom_projet;
        this.technos = technos;
        this.categorie = categorie;
        this.git=git;
        this.descriptionplus = descriptionplus;
    }
}
