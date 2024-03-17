// product-listing.models.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class ProductListing extends Document {
  @Prop({ type: String, required: true })
  pName: string;

  @Prop({ type: String, required: true })
  pCategory: string;

  @Prop({ type: String, required: true })
  pFreshness: string;

  @Prop({ type: [String], required: true })
  pImages: string[];

  @Prop({ type: String, required: true })
  pDescription: string;

  @Prop({ type: String, required: true })
  pPrice: string;

  @Prop({ type: Date })
  updatedAt?: Date;
}

export const ProductListingSchema = SchemaFactory.createForClass(ProductListing);
