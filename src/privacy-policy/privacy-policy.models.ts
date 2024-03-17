import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class PrivacyPolicy extends Document {
  @Prop({ type: String, required: true })
  policy: string;

  @Prop({ type: Date }) 
  updatedAt?: Date;
}

export const PrivacyPolicySchema = SchemaFactory.createForClass(PrivacyPolicy);
