/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProjetController } from './projet.controller';
import { ProjetService } from './projet.service';
import { Projet } from './entities/projet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// Assurez-vous d'importer ProjetRepository s'il est séparé

@Module({
  imports: [TypeOrmModule.forFeature([Projet])],
  controllers: [ProjetController],
  providers: [ProjetService], 
  
})
export class ProjetModule {}
