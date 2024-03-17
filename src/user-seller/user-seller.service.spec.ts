// user-seller.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSeller } from './user-seller.models';
import { CreateUserSellerDto } from './dto/create-user-seller.dto';
import { UpdateUserSellerDto } from './dto/update-user-seller.dto';

@Injectable()
export class UserSellerService {
  constructor(@InjectModel('UserSeller') private readonly userSellerModel: Model<UserSeller>) {}

  async create(createUserSellerDto: CreateUserSellerDto): Promise<UserSeller> {
    const createdUser = new this.userSellerModel(createUserSellerDto);
    return await createdUser.save();
  }

  async findAll(page: number = 1, limit: number = 10): Promise<{ users: UserSeller[]; total: number }> {
    const skip = (page - 1) * limit;
    const users = await this.userSellerModel.find().skip(skip).limit(limit).exec();
    const total = await this.userSellerModel.countDocuments();
    return { users, total };
  }

  async findOne(id: string): Promise<UserSeller> {
    const user = await this.userSellerModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User seller not found');
    }
    return user;
  }

  async update(id: string, updateUserSellerDto: UpdateUserSellerDto): Promise<UserSeller> {
    const updatedUser = await this.userSellerModel.findByIdAndUpdate(id, updateUserSellerDto, { new: true });
    if (!updatedUser) {
      throw new NotFoundException('User seller not found');
    }
    return updatedUser;
  }

  async remove(id: string): Promise<void> {
    const result = await this.userSellerModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('User seller not found');
    }
  }
}
