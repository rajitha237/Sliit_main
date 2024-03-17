import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrivacyPolicyController } from './privacy-policy.controller';
import { PrivacyPolicyService } from './privacy-policy.service';
import { PrivacyPolicy, PrivacyPolicySchema } from './privacy-policy.models';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'PrivacyPolicy', schema: PrivacyPolicySchema }]),
  ],
  controllers: [PrivacyPolicyController],
  providers: [PrivacyPolicyService],
})
export class PrivacyPolicyModule {}
