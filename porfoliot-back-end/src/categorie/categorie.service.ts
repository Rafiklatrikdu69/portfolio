/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorie } from './entities/categorie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategorieService {

  constructor(@InjectRepository(Categorie)
  private readonly categorieRepository: Repository<Categorie>
){}
  create(createCategorieDto: CreateCategorieDto) {
    return 'This action adds a new categorie';
  }

  findAll() {

    return this.categorieRepository.find({
   relations:{
    technos:true,
   }

    });
  }

  findOne(id: number) {
    return `This action returns a #${id} categorie`;
  }

  update(id: number, updateCategorieDto: UpdateCategorieDto) {
    return `This action updates a #${id} categorie`;
  }

  remove(id: number) {
    return `This action removes a #${id} categorie`;
  }
}
