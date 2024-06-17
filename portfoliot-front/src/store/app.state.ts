import { Categorie } from "../app/entity/Categorie.model";
import { Projet } from "../app/entity/projet.model";

export interface ProjetState {
    projets: Projet[];
    loading: boolean;
    error: string;
}
export interface TechnosState {
    technos: Categorie[];
    loading: boolean;
    error: string;
}
