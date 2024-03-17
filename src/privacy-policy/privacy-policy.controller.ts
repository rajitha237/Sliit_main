import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrivacyPolicyService } from './privacy-policy.service';
import { CreatePrivacyPolicyDto } from './dto/create-privacy-policy.dto';
import { UpdatePrivacyPolicyDto } from './dto/update-privacy-policy.dto';
import { PrivacyPolicy } from './privacy-policy.models';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('privacy-policy')
@Controller('privacy-policy')
export class PrivacyPolicyController {
  constructor(private readonly privacyPolicyService: PrivacyPolicyService) {}

  @Post()
  async create(@Body() createPrivacyPolicyDto: CreatePrivacyPolicyDto): Promise<PrivacyPolicy> {
    return await this.privacyPolicyService.create(createPrivacyPolicyDto);
  }

  @Get()
  async findAll(): Promise<UpdatePrivacyPolicyDto[]> {
    return await this.privacyPolicyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PrivacyPolicy> {
    return await this.privacyPolicyService.findOne(id);
  }

  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() updatePrivacyPolicyDto: UpdatePrivacyPolicyDto): Promise<PrivacyPolicy> {
    return await this.privacyPolicyService.update(id, updatePrivacyPolicyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.privacyPolicyService.remove(id);
  }
}
