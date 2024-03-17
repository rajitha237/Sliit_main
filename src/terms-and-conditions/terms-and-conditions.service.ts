import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TermsAndConditions } from './terms-and-conditions.models';
import { CreateTermsAndConditionDto } from './dto/create-terms-and-condition.dto';
import { UpdateTermsAndConditionDto } from './dto/update-terms-and-condition.dto';

@Injectable()
export class TermsAndConditionsService {
  constructor(@InjectModel('TermsAndConditions') private readonly termsAndConditionsModel: Model<TermsAndConditions>) {}

  async create(createTermsAndConditionDto: CreateTermsAndConditionDto): Promise<TermsAndConditions> {
    const createdTermsAndCondition = new this.termsAndConditionsModel(createTermsAndConditionDto);
    return await createdTermsAndCondition.save();
  }

  async findAll(): Promise<UpdateTermsAndConditionDto[]> {
    const termsAndConditions = await this.termsAndConditionsModel.find().exec();
    return termsAndConditions.map(t => ({
      conditions: t.conditions,
    })) as UpdateTermsAndConditionDto[];
  }

  async findOne(id: string): Promise<TermsAndConditions> {
    const termsAndCondition = await this.termsAndConditionsModel.findById(id).exec();
    if (!termsAndCondition) {
      throw new NotFoundException('Terms and conditions not found');
    }
    return termsAndCondition;
  }

  async update(id: string, updateTermsAndConditionDto: UpdateTermsAndConditionDto): Promise<TermsAndConditions> {
    const updatedTermsAndCondition = await this.termsAndConditionsModel.findByIdAndUpdate(id, updateTermsAndConditionDto, { new: true });
    if (!updatedTermsAndCondition) {
      throw new NotFoundException('Terms and conditions not found');
    }
    return updatedTermsAndCondition;
  }

  async remove(id: string): Promise<void> {
    const result = await this.termsAndConditionsModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Terms and conditions not found');
    }
  }
}
