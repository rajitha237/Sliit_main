import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'; // Correct import for MongooseModule
import { UserSellerModule } from './user-seller/user-seller.module';
import { ProductListingModule } from './product-listing/product-listing.module';
import { SellerBankModule } from './seller-bank/seller-bank.module';
import { UserBuyerModule } from './user-buyer/user-buyer.module';
import { FeedbackModule } from './feedback/feedback.module';
import { AdminModule } from './admin/admin.module';
import { TermsAndConditionsModule } from './terms-and-conditions/terms-and-conditions.module';
import { PrivacyPolicyModule } from './privacy-policy/privacy-policy.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    UserSellerModule,
    ProductListingModule,
    SellerBankModule,
    UserBuyerModule,
    FeedbackModule,
    AdminModule,
    TermsAndConditionsModule,
    PrivacyPolicyModule,
    // Correct usage of MongooseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
