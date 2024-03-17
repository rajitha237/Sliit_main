// seller-bank.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SellerBankController } from './seller-bank.controller';
import { SellerBankService } from './seller-bank.service';
import { SellerBank, SellerBankSchema } from './seller-bank.models';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'SellerBank', schema: SellerBankSchema }]),
  ],
  controllers: [SellerBankController],
  providers: [SellerBankService],
})
export class SellerBankModule {}
