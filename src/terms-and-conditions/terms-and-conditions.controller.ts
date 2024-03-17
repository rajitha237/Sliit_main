import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TermsAndConditionsService } from './terms-and-conditions.service';
import { CreateTermsAndConditionDto } from './dto/create-terms-and-condition.dto';
import { UpdateTermsAndConditionDto } from './dto/update-terms-and-condition.dto';
import { TermsAndConditions } from './terms-and-conditions.models';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('terms-and-conditions')
@Controller('terms-and-conditions')
export class TermsAndConditionsController {
  constructor(private readonly termsAndConditionsService: TermsAndConditionsService) {}

  @Post()
  async create(@Body() createTermsAndConditionDto: CreateTermsAndConditionDto): Promise<TermsAndConditions> {
    return await this.termsAndConditionsService.create(createTermsAndConditionDto);
  }

  @Get()
  async findAll(): Promise<UpdateTermsAndConditionDto[]> {
    return await this.termsAndConditionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TermsAndConditions> {
    return await this.termsAndConditionsService.findOne(id);
  }

  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() updateTermsAndConditionDto: UpdateTermsAndConditionDto): Promise<TermsAndConditions> {
    return await this.termsAndConditionsService.update(id, updateTermsAndConditionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.termsAndConditionsService.remove(id);
  }
}
