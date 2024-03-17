// user-buyer.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserBuyerController } from './user-buyer.controller';
import { UserBuyerService } from './user-buyer.service';
import { UserBuyerSchema } from './user-buyer.models';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserBuyer', schema: UserBuyerSchema },
    ]),
  ],
  controllers: [UserBuyerController],
  providers: [UserBuyerService],
})
export class UserBuyerModule {}
