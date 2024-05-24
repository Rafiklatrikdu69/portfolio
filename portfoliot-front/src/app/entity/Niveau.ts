export class Niveau {
    id_niveau!: number;
    nom_niveau!: string;
    constructor(id_niveau: number, nom_niveau:string) {
        this.id_niveau = id_niveau;
        this.nom_niveau = nom_niveau;
    }
}