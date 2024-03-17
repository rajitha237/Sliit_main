// seller-bank.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SellerBankService } from './seller-bank.service';
import { CreateSellerBankDto } from './dto/create-seller-bank.dto';
import { UpdateSellerBankDto } from './dto/update-seller-bank.dto';
import { SellerBank } from './seller-bank.models';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('seller-bank')
@Controller('seller-bank')
export class SellerBankController {
  constructor(private readonly sellerBankService: SellerBankService) {}

  @Post()
  async create(@Body() createSellerBankDto: CreateSellerBankDto): Promise<SellerBank> {
    return await this.sellerBankService.create(createSellerBankDto);
  }

  @Get()
  async findAll(): Promise<SellerBank[]> {
    return await this.sellerBankService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SellerBank> {
    return await this.sellerBankService.findOne(id);
  }

  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() updateSellerBankDto: UpdateSellerBankDto): Promise<SellerBank> {
    return await this.sellerBankService.update(id, updateSellerBankDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.sellerBankService.remove(id);
  }
}
