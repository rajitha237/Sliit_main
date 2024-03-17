// update-seller-bank.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateSellerBankDto } from './create-seller-bank.dto';

export class UpdateSellerBankDto extends PartialType(CreateSellerBankDto) {
    updatedAt?: Date;
}
