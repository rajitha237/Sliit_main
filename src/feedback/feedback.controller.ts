import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { Feedback } from './feedback.models';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('feedback')
@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  async create(@Body() createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return await this.feedbackService.create(createFeedbackDto);
  }

  @Get()
  async findAll(): Promise<UpdateFeedbackDto[]> {
    return await this.feedbackService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Feedback> {
    return await this.feedbackService.findOne(id);
  }

  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() updateFeedbackDto: UpdateFeedbackDto): Promise<Feedback> {
    return await this.feedbackService.update(id, updateFeedbackDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.feedbackService.remove(id);
  }
}
