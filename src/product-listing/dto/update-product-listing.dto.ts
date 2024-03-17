// update-product-listing.dto.ts

import { PartialType } from '@nestjs/swagger';
import { CreateProductListingDto } from './create-product-listing.dto';

export class UpdateProductListingDto extends PartialType(CreateProductListingDto) {
  updatedAt?: Date;
}
