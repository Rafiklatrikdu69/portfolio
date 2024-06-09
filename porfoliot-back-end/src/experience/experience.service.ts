import { Injectable } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Experience } from './entities/experience.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ExperienceService {
  constructor(@InjectRepository(Experience)
  private readonly repoExperience: Repository<Experience>){}
  create(createExperienceDto: CreateExperienceDto) {
    return 'This action adds a new experience';
  }

  findAll() {
    return this.repoExperience.find({});;
  }

  findOne(id: number) {
    return `This action returns a #${id} experience`;
  }

  update(id: number, updateExperienceDto: UpdateExperienceDto) {
    return `This action updates a #${id} experience`;
  }

  remove(id: number) {
    return `This action removes a #${id} experience`;
  }
}
