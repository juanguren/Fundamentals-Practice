import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './app.controller';
import { UserService } from './app.service';

describe('AppController', () => {
  let appController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    appController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('HEY!');
    });
    it('Other get with JSON', () => {
      const mockParam = '5';
      expect(appController.getMoreData(mockParam)).toBe(
        JSON.stringify({
          data: 'HEY',
          id: mockParam,
        }),
      );
    });
  });
});
