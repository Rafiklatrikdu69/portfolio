/* eslint-disable */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjetService } from './projet.service';
import { CreateProjetDto } from './dto/create-projet.dto';
import { UpdateProjetDto } from './dto/update-projet.dto';

@Controller('projet')
export class ProjetController {
  constructor(private readonly projetService: ProjetService) {}

  @Post('add')
  create(@Body() createProjetDto: CreateProjetDto) {
    return this.projetService.create(createProjetDto);
  }

  @Get('get')
  findAll() {
    return this.projetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.projetService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjetDto: UpdateProjetDto) {
    return this.projetService.update(+id, updateProjetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projetService.remove(+id);
  }
}
