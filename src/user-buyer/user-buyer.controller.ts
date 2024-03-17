// user-buyer.controller.ts

import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UserBuyerService } from './user-buyer.service';
import { CreateUserBuyerDto } from './dto/create-user-buyer.dto';
import { UpdateUserBuyerDto } from './dto/update-user-buyer.dto';
import { UserBuyer } from './user-buyer.models';

@ApiTags('user-buyer')
@Controller('user-buyer')
export class UserBuyerController {
  constructor(private readonly userBuyerService: UserBuyerService) {}

  @ApiBody({ type: CreateUserBuyerDto })
  @ApiResponse({ status: 201, type: UserBuyer })
  @Post('/signup')
  create(@Body() createUserBuyerDto: CreateUserBuyerDto) {
    return this.userBuyerService.create(createUserBuyerDto);
  }

  @ApiResponse({ status: 200, type: UserBuyer, isArray: true })
  @Get()
  async findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.userBuyerService.findAll(page, limit);
  }

  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: UserBuyer })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userBuyerService.findOne(id);
  }

  @ApiBody({ type: UpdateUserBuyerDto })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: UserBuyer })
  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateUserBuyerDto: UpdateUserBuyerDto) {
    return this.userBuyerService.update(id, updateUserBuyerDto);
  }

  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 204 })
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.userBuyerService.remove(id);
  }
}
