import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class TermsAndConditions extends Document {
  @Prop({ type: String, required: true })
  conditions: string;

  @Prop({ type: Date }) 
  updatedAt?: Date;
}

export const TermsAndConditionsSchema = SchemaFactory.createForClass(TermsAndConditions);
