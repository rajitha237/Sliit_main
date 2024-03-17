// product-listing.controller.ts

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductListingService } from './product-listing.service';
import { CreateProductListingDto } from './dto/create-product-listing.dto';
import { UpdateProductListingDto } from './dto/update-product-listing.dto';
import { ProductListing } from './product-listing.models';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user-product-listing')
@Controller('product-listing')
export class ProductListingController {
  constructor(private readonly productListingService: ProductListingService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductListingDto): Promise<ProductListing> {
    return await this.productListingService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<UpdateProductListingDto[]> {
    return await this.productListingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductListing> {
    return await this.productListingService.findOne(id);
  }

  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductListingDto): Promise<ProductListing> {
    return await this.productListingService.update(id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.productListingService.remove(id);
  }
}
