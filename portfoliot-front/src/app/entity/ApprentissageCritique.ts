import { Niveau } from "./Niveau";

export class ApprentissageCritique{
    id_apprentissage!: number;
    nom_apprentissage!: string;
    description_apprentissage!: string;
    poids_apprentissage!: number;
    semestreCompetence!:Niveau;
    constructor(
        id_apprentissage: number,
        nom_apprentissage:string,
        description_apprentissage:string,
        poids_apprentissage:number,
        semestreCompetence:Niveau
    ){
        this.id_apprentissage = id_apprentissage
        this.nom_apprentissage = nom_apprentissage
        this.description_apprentissage= description_apprentissage
        this.poids_apprentissage = poids_apprentissage
        this.semestreCompetence = semestreCompetence
    }
}