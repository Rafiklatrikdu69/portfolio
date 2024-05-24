import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApprentissageCritiqueService } from './apprentissage-critique.service';
import { CreateApprentissageCritiqueDto } from './dto/create-apprentissage-critique.dto';
import { UpdateApprentissageCritiqueDto } from './dto/update-apprentissage-critique.dto';

@Controller('apprentissage-critique')
export class ApprentissageCritiqueController {
  constructor(private readonly apprentissageCritiqueService: ApprentissageCritiqueService) {}

  @Post()
  create(@Body() createApprentissageCritiqueDto: CreateApprentissageCritiqueDto) {
    return this.apprentissageCritiqueService.create(createApprentissageCritiqueDto);
  }

  @Get()
  findAll() {
    return this.apprentissageCritiqueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apprentissageCritiqueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApprentissageCritiqueDto: UpdateApprentissageCritiqueDto) {
    return this.apprentissageCritiqueService.update(+id, updateApprentissageCritiqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apprentissageCritiqueService.remove(+id);
  }
}
