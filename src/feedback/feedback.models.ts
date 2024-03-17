// feedback.models.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class Feedback extends Document {
  @Prop({ type: String, required: true })
  feedbackType: string;

  @Prop({ type: String, required: true })
  feedback: string;

  @Prop({ type: Date }) 
  updatedAt?: Date;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
