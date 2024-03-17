// user-buyer.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserBuyer extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  address: string;

  @Prop()
  contactNumber: string;
}

export const UserBuyerSchema = SchemaFactory.createForClass(UserBuyer);
