import { Module } from '@nestjs/common';
import { NiveauService } from './niveau.service';
import { NiveauController } from './niveau.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Niveau } from './entities/niveau.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Niveau])],
  controllers: [NiveauController],
  providers: [NiveauService],
})
export class NiveauModule {}
