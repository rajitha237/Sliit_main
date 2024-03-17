// admin.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse, ApiParam } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './admin.schema';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiBody({ type: CreateAdminDto })
  @ApiResponse({ status: 201, type: Admin })
  @Post('/signup')
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiResponse({ status: 200, type: Admin, isArray: true })
  @Get()
  async findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.adminService.findAll(page, limit);
  }

  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: Admin })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }

  @ApiBody({ type: UpdateAdminDto })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: Admin })
  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(id, updateAdminDto);
  }

  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 204 })
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(id);
  }
}
