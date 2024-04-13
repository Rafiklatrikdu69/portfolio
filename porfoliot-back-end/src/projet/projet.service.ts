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
    return this.projetRepository.find({})
  }

  findOne(id: number) {
    return `This action returns a #${id} projet`;
  }

  update(id: number, updateProjetDto: UpdateProjetDto) {
    return `This action updates a #${id} projet`;
  }

  remove(id: number) {
    return `This action removes a #${id} projet`;
  }
}
