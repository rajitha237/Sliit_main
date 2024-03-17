// seller-bank.models.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class SellerBank extends Document {
  @Prop({ type: String, required: true })
  bName: string;

  @Prop({ type: String, required: true })
  accName: string;

  @Prop({ type: String, required: true })
  aNumber: string;

  @Prop({ type: String, required: true })
  bCode: string;

  @Prop({ type: String, required: true })
  branch: string;

  @Prop({ type: Date }) 
  updatedAt?: Date;
}

export const SellerBankSchema = SchemaFactory.createForClass(SellerBank);
