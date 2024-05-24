import { Test, TestingModule } from '@nestjs/testing';
import { ApprentissageCritiqueController } from './apprentissage-critique.controller';
import { ApprentissageCritiqueService } from './apprentissage-critique.service';

describe('ApprentissageCritiqueController', () => {
  let controller: ApprentissageCritiqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApprentissageCritiqueController],
      providers: [ApprentissageCritiqueService],
    }).compile();

    controller = module.get<ApprentissageCritiqueController>(ApprentissageCritiqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
