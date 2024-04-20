/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetModule } from './projet/projet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projet } from './projet/entities/projet.entity'; // Assurez-vous que l'import est correct
import { TechnologiesModule } from './technologies/technologies.module';
import { Technology } from './technologies/entities/technology.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'porfoliot',
      entities: [Technology,Projet],
      autoLoadEntities: true,
      // synchronize:true
    }),
    
    ProjetModule,
    TechnologiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}