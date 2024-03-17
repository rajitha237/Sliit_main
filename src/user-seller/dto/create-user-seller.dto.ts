// create-user-seller.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserSellerDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  ContactNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  BusinessName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  companyNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  country: string;
}
