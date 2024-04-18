export class Projet {
    date: string;
    description: string;
    id_projet: number;
    image: string;
    nom_projet: string;

    constructor(date: string, description: string, id_projet: number, image: string, nom_projet: string) {
        this.date = date;
        this.description = description;
        this.id_projet = id_projet;
        this.image = image;
        this.nom_projet = nom_projet;
    }
}
