/* eslint-disable prettier/prettier */
import { Niveau } from 'src/niveau/entities/niveau.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ApprentissageCritique {
  @PrimaryGeneratedColumn()
  id_apprentissage: number;

  @Column()
  nom_apprentissage: string;
  @ManyToOne(() => Niveau, (niveau: Niveau) => niveau.apprentissages)
  @JoinColumn({name: 'id_niveau'})
  semestreCompetence:Niveau;

}
