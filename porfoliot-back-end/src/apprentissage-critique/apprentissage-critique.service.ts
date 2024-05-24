import { Injectable } from '@nestjs/common';
import { CreateApprentissageCritiqueDto } from './dto/create-apprentissage-critique.dto';
import { UpdateApprentissageCritiqueDto } from './dto/update-apprentissage-critique.dto';

@Injectable()
export class ApprentissageCritiqueService {
  create(createApprentissageCritiqueDto: CreateApprentissageCritiqueDto) {
    return 'This action adds a new apprentissageCritique';
  }

  findAll() {
    return `This action returns all apprentissageCritique`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apprentissageCritique`;
  }

  update(id: number, updateApprentissageCritiqueDto: UpdateApprentissageCritiqueDto) {
    return `This action updates a #${id} apprentissageCritique`;
  }

  remove(id: number) {
    return `This action removes a #${id} apprentissageCritique`;
  }
}
