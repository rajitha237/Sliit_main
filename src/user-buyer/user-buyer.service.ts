// user-buyer.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserBuyer } from './user-buyer.models';
import { CreateUserBuyerDto } from './dto/create-user-buyer.dto';
import { UpdateUserBuyerDto } from './dto/update-user-buyer.dto';

@Injectable()
export class UserBuyerService {
  constructor(@InjectModel('UserBuyer') private readonly userBuyerModel: Model<UserBuyer>) {}

  async create(createUserBuyerDto: CreateUserBuyerDto): Promise<UserBuyer> {
    const createdUser = new this.userBuyerModel(createUserBuyerDto);
    return await createdUser.save();
  }

  async findAll(page: number = 1, limit: number = 10): Promise<{ users: UserBuyer[]; total: number }> {
    const skip = (page - 1) * limit;
    const users = await this.userBuyerModel.find().skip(skip).limit(limit).exec();
    const total = await this.userBuyerModel.countDocuments();
    return { users, total };
  }

  async findOne(id: string): Promise<UserBuyer> {
    const user = await this.userBuyerModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, updateUserBuyerDto: UpdateUserBuyerDto): Promise<UserBuyer> {
    const updatedUser = await this.userBuyerModel.findByIdAndUpdate(id, updateUserBuyerDto, { new: true });
    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }
    return updatedUser;
  }

  async remove(id: string): Promise<void> {
    const result = await this.userBuyerModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('User not found');
    }
  }
}
