/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateSemestreDto } from './dto/create-semestre.dto';
import { UpdateSemestreDto } from './dto/update-semestre.dto';
import { Semestre } from './entities/semestre.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SemestreService {
  constructor(
    @InjectRepository(Semestre)
    private readonly projetRepository: Repository<Semestre>
  ){}
  create(createSemestreDto: CreateSemestreDto) {
    return 'This action adds a new semestre';
  }

  findAll() {
    return this.projetRepository.find({
       relations : 
       [
       'competences',
       'competences.projet',
       'competences.projet.technos',
       'competences.niveauCompetence',
       'competences.niveauCompetence.apprentissages'
      ],
   
    });
  }

  findOne(id: number) {
    return this.projetRepository.find({
      relations : 
      [
      'competences',
      'competences.projet',
      'competences.projet.technos',
      'competences.niveauCompetence.apprentissages'
    ],
    where :{
      id_semestre : id,
    
    },
    order:{
      competences:{
          nom_competence:"ASC"
      }
    }
    });
  }

  update(id: number, updateSemestreDto: UpdateSemestreDto) {
    return `This action updates a #${id} semestre`;
  }

  remove(id: number) {
    return `This action removes a #${id} semestre`;
  }
}
