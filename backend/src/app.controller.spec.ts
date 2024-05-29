import { Test, TestingModule } from '@nestjs/testing';
import { GadgetController } from './gadget/gadget.controller';
import { GadgetService } from './gadget/gadget.service';

describe('AppController', () => {
  let appController: GadgetController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GadgetController],
      providers: [GadgetService],
    }).compile();

    appController = app.get<GadgetController>(GadgetController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
