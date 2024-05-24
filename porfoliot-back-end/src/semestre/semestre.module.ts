/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SemestreService } from './semestre.service';
import { SemestreController } from './semestre.controller';
import { Semestre } from './entities/semestre.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Semestre])],
  controllers: [SemestreController],
  providers: [SemestreService],
})
export class SemestreModule {}
