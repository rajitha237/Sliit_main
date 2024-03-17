// create-user-buyer.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserBuyerDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  contactNumber: string;
}
