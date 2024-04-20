/* eslint-disable */
import { Categorie } from 'src/categorie/entities/categorie.entity';
import { Projet } from '../../projet/entities/projet.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Technology {
  @PrimaryGeneratedColumn()
  id_techno: number;

  @Column()
  nom_techno: string;

  @Column()
  image_techno: string;

  @ManyToMany(() => Projet, (projet: Projet) => projet.technos)
  @JoinTable({
    name: 'projet_techno', 
    joinColumn: { name: 'techno_id', referencedColumnName: 'id_techno' }, 
    inverseJoinColumn: { name: 'projet_id', referencedColumnName: 'id_projet' } 
  })
  projets: Projet[];
  @ManyToOne(() => Categorie, (categorie: Categorie) => categorie.technos)

  categorie: Categorie;
}
