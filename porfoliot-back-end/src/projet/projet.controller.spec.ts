/* eslint-disable */
import { Test, TestingModule } from '@nestjs/testing';
import { ProjetController } from './projet.controller';
import { ProjetService } from './projet.service';

describe('ProjetController', () => {
  let controller: ProjetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjetController],
      providers: [ProjetService],
    }).compile();

    controller = module.get<ProjetController>(ProjetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
