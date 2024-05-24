import { Test, TestingModule } from '@nestjs/testing';
import { NiveauController } from './niveau.controller';
import { NiveauService } from './niveau.service';

describe('NiveauController', () => {
  let controller: NiveauController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NiveauController],
      providers: [NiveauService],
    }).compile();

    controller = module.get<NiveauController>(NiveauController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
