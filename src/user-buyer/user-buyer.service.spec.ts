import { Test, TestingModule } from '@nestjs/testing';
import { UserBuyerService } from './user-buyer.service';

describe('UserBuyerService', () => {
  let service: UserBuyerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBuyerService],
    }).compile();

    service = module.get<UserBuyerService>(UserBuyerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
