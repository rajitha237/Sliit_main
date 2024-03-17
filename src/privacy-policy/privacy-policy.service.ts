import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PrivacyPolicy } from './privacy-policy.models';
import { CreatePrivacyPolicyDto } from './dto/create-privacy-policy.dto';
import { UpdatePrivacyPolicyDto } from './dto/update-privacy-policy.dto';

@Injectable()
export class PrivacyPolicyService {
  constructor(@InjectModel('PrivacyPolicy') private readonly privacyPolicyModel: Model<PrivacyPolicy>) {}

  async create(createPrivacyPolicyDto: CreatePrivacyPolicyDto): Promise<PrivacyPolicy> {
    const createdPrivacyPolicy = new this.privacyPolicyModel(createPrivacyPolicyDto);
    return await createdPrivacyPolicy.save();
  }

  async findAll(): Promise<UpdatePrivacyPolicyDto[]> {
    const policies = await this.privacyPolicyModel.find().exec();

    const dtoArray = policies.map(policy => ({
      policy: policy.policy,
      updatedAt: policy.updatedAt,
    }));

    return dtoArray;
  }

  async findOne(id: string): Promise<PrivacyPolicy> {
    const policy = await this.privacyPolicyModel.findById(id).exec();
    if (!policy) {
      throw new NotFoundException('Privacy Policy not found');
    }
    return policy;
  }

  async update(id: string, updatePrivacyPolicyDto: UpdatePrivacyPolicyDto): Promise<PrivacyPolicy> {
    updatePrivacyPolicyDto.updatedAt = new Date();
    const updatedPolicy = await this.privacyPolicyModel.findByIdAndUpdate(id, updatePrivacyPolicyDto, { new: true });
    if (!updatedPolicy) {
      throw new NotFoundException('Privacy Policy not found');
    }
    return updatedPolicy;
  }

  async remove(id: string): Promise<void> {
    const result = await this.privacyPolicyModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Privacy Policy not found');
    }
  }
}
