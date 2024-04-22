/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCompetenceDto } from './dto/create-competence.dto';
import { UpdateCompetenceDto } from './dto/update-competence.dto';
import { Repository } from 'typeorm';
import { Competence } from './entities/competence.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompetenceService {
  constructor(@InjectRepository(Competence)  private readonly competenceRepository : Repository<Competence>){}
  create(createCompetenceDto: CreateCompetenceDto) {
    return 'This action adds a new competence';
  }

  findAll() {
    return this.competenceRepository
      .createQueryBuilder('Competence')
      .select('Competence.nom_competence, Competence.description, COUNT(*) AS count')
      .groupBy('Competence.nom_competence, Competence.description')
      .getRawMany();
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
