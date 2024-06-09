export class Experience{
    id_experience!:number;
    nom_experience!:number;
    desc_experience!:string;
    constructor(
        id_experience:number,
        nom_experience:number,
        desc_experience:string
    ){
        this.id_experience = id_experience;
        this.nom_experience = nom_experience,
        this.desc_experience = desc_experience
    }

}