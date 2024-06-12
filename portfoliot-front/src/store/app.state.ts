import { Categorie } from "../app/entity/Categorie.model";
import { Technology } from "../app/entity/Technology.model";
import { Projet } from "../app/entity/projet.model";

export interface ProjetState {
    projet: Projet[];
    loading: boolean;
    error: string;
}
export interface TechnoState {
    technos: Categorie[];
    loading: boolean;
    error: string;
}