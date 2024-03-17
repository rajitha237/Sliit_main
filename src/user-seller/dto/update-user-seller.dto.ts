// update-user-seller.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserSellerDto } from './create-user-seller.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserSellerDto extends PartialType(CreateUserSellerDto) {
  @ApiProperty({ required: false })
  firstName?: string;

  @ApiProperty({ required: false })
  lastName?: string;

  @ApiProperty({ required: false })
  email?: string;

  @ApiProperty({ required: false })
  password?: string;

  @ApiProperty({ required: false })
  address?: string;

  @ApiProperty({ required: false })
  ContactNumber?: string;

  @ApiProperty({ required: false })
  BusinessName?: string;

  @ApiProperty({ required: false })
  companyNumber?: string;

  @ApiProperty({ required: false })
  country?: string;
}
