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
  
  }

  findAll() {
    return this.competenceRepository.find({
      relations: ['projet', 'projet.technos','projet.techno.categorie'],
    //  relations:{
    //     projet:true
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
