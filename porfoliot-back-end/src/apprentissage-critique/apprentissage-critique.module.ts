import { Module } from '@nestjs/common';
import { ApprentissageCritiqueService } from './apprentissage-critique.service';
import { ApprentissageCritiqueController } from './apprentissage-critique.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApprentissageCritique } from './entities/apprentissage-critique.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApprentissageCritique])],
  controllers: [ApprentissageCritiqueController],
  providers: [ApprentissageCritiqueService],
})
export class ApprentissageCritiqueModule {}
