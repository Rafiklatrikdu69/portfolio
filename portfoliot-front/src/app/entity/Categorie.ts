import { Technology } from "./Technology";

export class Categorie{
    id_cat:number;
    nom_cat:string;
    technos:Technology[]
    constructor(id_cat:number, nom_cat:string,technos:Technology[]){
        this.id_cat = id_cat;
        this.nom_cat = nom_cat;
        this.technos = technos;
    }
}