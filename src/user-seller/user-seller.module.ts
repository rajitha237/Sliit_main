// user-seller.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSellerController } from './user-seller.controller';
import { UserSellerService } from './user-seller.service';
import { UserSellerSchema } from './user-seller.models';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserSeller', schema: UserSellerSchema },
    ]),
  ],
  controllers: [UserSellerController],
  providers: [UserSellerService], 
})
export class UserSellerModule {}
