// seller-bank.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SellerBank } from './seller-bank.models';
import { CreateSellerBankDto} from './dto/create-seller-bank.dto';
import { UpdateSellerBankDto } from './dto/update-seller-bank.dto';

@Injectable()
export class SellerBankService {
  constructor(@InjectModel('SellerBank') private readonly sellerBankModel: Model<SellerBank>) {}

  async create(createSellerBankDto: CreateSellerBankDto): Promise<SellerBank> {
    const createdSellerBank = new this.sellerBankModel(createSellerBankDto);
    return await createdSellerBank.save();
  }

  async findAll(): Promise<SellerBank[]> {
    return await this.sellerBankModel.find().exec();
  }

  async findOne(id: string): Promise<SellerBank> {
    const sellerBank = await this.sellerBankModel.findById(id).exec();
    if (!sellerBank) {
      throw new NotFoundException('Seller bank not found');
    }
    return sellerBank;
  }

  async update(id: string, updateSellerBankDto: UpdateSellerBankDto): Promise<SellerBank> {
    updateSellerBankDto.updatedAt = new Date();
    const updatedSellerBank = await this.sellerBankModel.findByIdAndUpdate(id, updateSellerBankDto, { new: true });
    if (!updatedSellerBank) {
      throw new NotFoundException('Seller bank not found');
    }
    return updatedSellerBank;
  }

  async remove(id: string): Promise<void> {
    const result = await this.sellerBankModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Seller bank not found');
    }
  }
}
