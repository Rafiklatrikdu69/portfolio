/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompetenceService } from './competence.service';
import { CreateCompetenceDto } from './dto/create-competence.dto';
import { UpdateCompetenceDto } from './dto/update-competence.dto';
import { Competence } from './entities/competence.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('competence')
export class CompetenceController {
 
  constructor(  private readonly competenceService: CompetenceService) {}

  @Post('add')
  create(@Body() createCompetenceDto: CreateCompetenceDto) {
    return this.competenceService.create(createCompetenceDto);
  }

  @Get('get')
  findAll() {
    return this.competenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competenceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompetenceDto: UpdateCompetenceDto) {
    return this.competenceService.update(+id, updateCompetenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.competenceService.remove(+id);
  }
}
