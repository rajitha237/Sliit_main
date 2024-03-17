import { Test, TestingModule } from '@nestjs/testing';
import { UserSellerController } from './user-seller.controller';
import { UserSellerService } from './user-seller.service';

describe('UserSellerController', () => {
  let controller: UserSellerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserSellerController],
      providers: [UserSellerService],
    }).compile();

    controller = module.get<UserSellerController>(UserSellerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
