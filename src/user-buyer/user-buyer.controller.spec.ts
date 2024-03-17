import { Test, TestingModule } from '@nestjs/testing';
import { UserBuyerController } from './user-buyer.controller';
import { UserBuyerService } from './user-buyer.service';

describe('UserBuyerController', () => {
  let controller: UserBuyerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserBuyerController],
      providers: [UserBuyerService],
    }).compile();

    controller = module.get<UserBuyerController>(UserBuyerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
