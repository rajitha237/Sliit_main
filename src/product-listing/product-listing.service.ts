// product-listing.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductListing } from './product-listing.models';
import { CreateProductListingDto } from './dto/create-product-listing.dto';
import { UpdateProductListingDto } from './dto/update-product-listing.dto';

@Injectable()
export class ProductListingService {
  constructor(@InjectModel('ProductListing') private readonly productListingModel: Model<ProductListing>) {}

  async create(createProductDto: CreateProductListingDto): Promise<ProductListing> {
    const createdProduct = new this.productListingModel(createProductDto);
    return await createdProduct.save();
  }

  async findAll(): Promise<UpdateProductListingDto[]> {
    const products = await this.productListingModel.find().exec();
    const dtoArray = products.map(product => ({
      pName: product.pName,
      pCategory: product.pCategory,
      pFreshness: product.pFreshness,
      pImages: product.pImages,
      pDescription: product.pDescription,
      pPrice: product.pPrice,
      updatedAt: product.updatedAt,
    }));
    return dtoArray;
  }

  async findOne(id: string): Promise<ProductListing> {
    const product = await this.productListingModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductListingDto): Promise<ProductListing> {
    updateProductDto.updatedAt = new Date();
    const updatedProduct = await this.productListingModel.findByIdAndUpdate(id, updateProductDto, { new: true });
    if (!updatedProduct) {
      throw new NotFoundException('Product not found');
    }
    return updatedProduct;
  }

  async remove(id: string): Promise<void> {
    const result = await this.productListingModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Product not found');
    }
  }
}
