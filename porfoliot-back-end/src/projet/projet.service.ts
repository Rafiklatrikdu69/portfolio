/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { CreateProjetDto } from './dto/create-projet.dto';
import { UpdateProjetDto } from './dto/update-projet.dto';
import { Projet } from './entities/projet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProjetService {

  constructor(
    @InjectRepository(Projet)
    private readonly projetRepository: Repository<Projet>,
  ) {}
  create(createProjetDto: CreateProjetDto) {
    return  this.projetRepository.save(createProjetDto);
  }

  findAll() {
    // @ts-ignore
    return this.projetRepository.find({
      relations: ['technos', 'technos.categorie'],
      order: {
        nom_projet:  "ASC"
      }
    })
  }

  findOne(id: number) {
   return this.projetRepository.findOne({
    relations: ['technos', 'technos.categorie'],
    where: {id_projet: id},
    
    order: {
      technos:{
        nom_techno: "ASC"
      }
    }
  });
  }

  update(id: number, updateProjetDto: UpdateProjetDto) {
    return `This action updates a #${id} projet`;
  }

  remove(id: number) {
    return `This action removes a #${id} projet`;
  }
}
