// create-seller-bank.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSellerBankDto {
  @ApiProperty({ description: 'Name of the bank', example: 'ABC Bank' })
  @IsString()
  @IsNotEmpty()
  bName: string;

  @ApiProperty({ description: 'Account name', example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  accName: string;

  @ApiProperty({ description: 'Account number', example: '123456789' })
  @IsString()
  @IsNotEmpty()
  aNumber: string;

  @ApiProperty({ description: 'Bank code', example: 'ABC123' })
  @IsString()
  @IsNotEmpty()
  bCode: string;

  @ApiProperty({ description: 'Bank branch', example: 'Main Branch' })
  @IsString()
  @IsNotEmpty()
  branch: string;
}
