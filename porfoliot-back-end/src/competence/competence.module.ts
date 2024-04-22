/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CompetenceService } from './competence.service';
import { CompetenceController } from './competence.controller';
import { Competence } from './entities/competence.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Competence])],
  controllers: [CompetenceController],
  providers: [CompetenceService],
})
export class CompetenceModule {}
