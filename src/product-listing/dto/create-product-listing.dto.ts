// create-product-listing.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductListingDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  pName: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  pCategory: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  pFreshness: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  pImages: string[];

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  pDescription: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  pPrice: string;

  comments?: string;
}
