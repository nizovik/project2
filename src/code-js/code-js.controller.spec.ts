import { Test, TestingModule } from '@nestjs/testing';
import { CodeJsController } from './code-js.controller';

describe('CodeJsController', () => {
  let controller: CodeJsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodeJsController],
    }).compile();

    controller = module.get<CodeJsController>(CodeJsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
