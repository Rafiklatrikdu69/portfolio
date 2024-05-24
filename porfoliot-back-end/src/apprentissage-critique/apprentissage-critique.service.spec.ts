import { Test, TestingModule } from '@nestjs/testing';
import { ApprentissageCritiqueService } from './apprentissage-critique.service';

describe('ApprentissageCritiqueService', () => {
  let service: ApprentissageCritiqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApprentissageCritiqueService],
    }).compile();

    service = module.get<ApprentissageCritiqueService>(ApprentissageCritiqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
