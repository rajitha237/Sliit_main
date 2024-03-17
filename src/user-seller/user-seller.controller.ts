// user-seller.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UserSellerService } from './user-seller.service';
import { CreateUserSellerDto } from './dto/create-user-seller.dto';
import { UpdateUserSellerDto } from './dto/update-user-seller.dto';
import { UserSeller } from './user-seller.models';

@ApiTags('user-seller')
@Controller('user-seller')
export class UserSellerController {
  constructor(private readonly userSellerService: UserSellerService) {}

  @ApiBody({ type: CreateUserSellerDto })
  @ApiResponse({ status: 201, type: UserSeller })
  @Post('/signup')
  create(@Body() createUserSellerDto: CreateUserSellerDto) {
    return this.userSellerService.create(createUserSellerDto);
  }

  @ApiResponse({ status: 200, type: UserSeller, isArray: true })
  @Get()
  async findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.userSellerService.findAll(page, limit);
  }

  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: UserSeller })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userSellerService.findOne(id);
  }

  @ApiBody({ type: UpdateUserSellerDto })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: UserSeller })
  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() updateUserSellerDto: UpdateUserSellerDto) {
    return this.userSellerService.update(id, updateUserSellerDto);
  }

  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 204 })
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.userSellerService.remove(id);
  }
}
