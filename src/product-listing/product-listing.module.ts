// product-listing.module.ts

import { Module } from '@nestjs/common';
import { ProductListingService } from './product-listing.service';
import { ProductListingController } from './product-listing.controller';
import { ProductListingSchema } from './product-listing.models';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ProductListing', schema: ProductListingSchema }]),
  ],
  controllers: [ProductListingController],
  providers: [ProductListingService],
})
export class ProductListingModule {}
