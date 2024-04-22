import { Test, TestingModule } from '@nestjs/testing';
import { CompetenceService } from './competence.service';

describe('CompetenceService', () => {
  let service: CompetenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompetenceService],
    }).compile();

    service = module.get<CompetenceService>(CompetenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
