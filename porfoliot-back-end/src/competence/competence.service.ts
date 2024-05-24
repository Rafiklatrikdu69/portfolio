/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCompetenceDto } from './dto/create-competence.dto';
import { UpdateCompetenceDto } from './dto/update-competence.dto';
import { Repository } from 'typeorm';
import { Competence } from './entities/competence.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Projet } from 'src/projet/entities/projet.entity';

@Injectable()
export class CompetenceService {
  constructor(
    @InjectRepository(Competence)  
    private readonly competenceRepository : 
    Repository<Competence>){}
  create(createCompetenceDto: CreateCompetenceDto) {
    return this.competenceRepository.create({nom_competence:"dadad",description:"cdssdf",
    listeProjet:[new Projet()]
  })
  }

  findAll() {
    return this.competenceRepository.find({
      relations: ['listeProjet', 'listeProjet.technos','listeProjet.techno.categorie'],
    //  relations:{
    //     listeProjet:true
    //  }
    });
  }
  

  findOne(id: number) {
    return `This action returns a #${id} competence`;
  }

  update(id: number, updateCompetenceDto: UpdateCompetenceDto) {
    return `This action updates a #${id} competence`;
  }

  remove(id: number) {
    return `This action removes a #${id} competence`;
  }
}
