// user-seller.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserSeller extends Document {
  @Prop({ type: String }) // Specify type as String
  firstName: string;

  @Prop({ type: String }) // Specify type as String
  lastName: string;

  @Prop({ type: String }) // Specify type as String
  email: string;

  @Prop({ type: String }) // Specify type as String
  password: string;

  @Prop({ type: String }) // Specify type as String
  address: string;

  @Prop({ type: String }) // Specify type as String
  ContactNumber: string;

  @Prop({ type: String }) // Specify type as String
  BusinessName: string;

  @Prop({ type: String }) // Specify type as String
  companyNumber: string;

  @Prop({ type: String }) // Specify type as String
  country: string;
}

export const UserSellerSchema = SchemaFactory.createForClass(UserSeller);
