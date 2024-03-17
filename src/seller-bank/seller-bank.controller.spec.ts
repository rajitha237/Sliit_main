import { Test, TestingModule } from '@nestjs/testing';
import { SellerBankController } from './seller-bank.controller';
import { SellerBankService } from './seller-bank.service';

describe('SellerBankController', () => {
  let controller: SellerBankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerBankController],
      providers: [SellerBankService],
    }).compile();

    controller = module.get<SellerBankController>(SellerBankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
