/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetModule } from './projet/projet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projet } from './projet/entities/projet.entity'; // Assurez-vous que l'import est correct
import { TechnologiesModule } from './technologies/technologies.module';
import { Technology } from './technologies/entities/technology.entity';
import { CategorieModule } from './categorie/categorie.module';
import { Categorie } from './categorie/entities/categorie.entity';
import { Competence } from './competence/entities/competence.entity';
import { CompetenceModule } from './competence/competence.module';
import { SemestreModule } from './semestre/semestre.module';
import { Semestre } from './semestre/entities/semestre.entity';
import { NiveauModule } from './niveau/niveau.module';
import { Niveau } from './niveau/entities/niveau.entity';
import { ApprentissageCritiqueModule } from './apprentissage-critique/apprentissage-critique.module';
import { ApprentissageCritique } from './apprentissage-critique/entities/apprentissage-critique.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'porfoliot',
      entities: 
      [
        Technology,
        Projet,
        Categorie,
        Competence,
        Semestre,
        Niveau,
        ApprentissageCritique
      ],
      autoLoadEntities: true,
      synchronize:true
    }),

    ProjetModule,
    TechnologiesModule,
    CategorieModule,
    CompetenceModule,
    SemestreModule,
    NiveauModule,
    ApprentissageCritiqueModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
