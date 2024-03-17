import { Test, TestingModule } from '@nestjs/testing';
import { SellerBankService } from './seller-bank.service';

describe('SellerBankService', () => {
  let service: SellerBankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerBankService],
    }).compile();

    service = module.get<SellerBankService>(SellerBankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
