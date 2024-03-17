// admin.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './admin.schema';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(@InjectModel('Admin') private readonly adminModel: Model<Admin>) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const createdAdmin = new this.adminModel(createAdminDto);
    return await createdAdmin.save();
  }

  async findAll(page: number = 1, limit: number = 10): Promise<{ admins: Admin[]; total: number }> {
    const skip = (page - 1) * limit;
    const admins = await this.adminModel.find().skip(skip).limit(limit).exec();
    const total = await this.adminModel.countDocuments();
    return { admins, total };
  }

  async findOne(id: string): Promise<Admin> {
    const admin = await this.adminModel.findById(id).exec();
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }
    return admin;
  }

  async update(id: string, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    const updatedAdmin = await this.adminModel.findByIdAndUpdate(id, updateAdminDto, { new: true });
    if (!updatedAdmin) {
      throw new NotFoundException('Admin not found');
    }
    return updatedAdmin;
  }

  async remove(id: string): Promise<void> {
    const result = await this.adminModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Admin not found');
    }
  }

  async findByEmail(email: string): Promise<Admin> {
    const admin = await this.adminModel.findOne({ email }).exec();
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }
    return admin;
  }
}
