import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Experience {
    @PrimaryGeneratedColumn()
    id_experience: number;
    @Column()
    nom_experience: string;
    @Column({length:500})
    desc_experience: string;
    @Column('date', { nullable: true })
    date_experience: Date;
    @Column()
    scolaire: boolean;
}
