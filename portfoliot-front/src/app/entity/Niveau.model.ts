import { ApprentissageCritique } from "./ApprentissageCritique.model";

export class Niveau {
    id_niveau!: number;
    nom_niveau!: string;
    apprentissages!:ApprentissageCritique[];
    constructor(
        id_niveau: number, 
        nom_niveau:string, 
        apprentissages:ApprentissageCritique[]
    ) {
        this.id_niveau = id_niveau;
        this.nom_niveau = nom_niveau;
        this.apprentissages = apprentissages
    }
}