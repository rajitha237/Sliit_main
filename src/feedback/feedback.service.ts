import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feedback } from './feedback.models';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(@InjectModel('Feedback') private readonly feedbackModel: Model<Feedback>) {}

  async create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const createdFeedback = new this.feedbackModel(createFeedbackDto);
    return await createdFeedback.save();
  }

  async findAll(): Promise<UpdateFeedbackDto[]> {
    const feedbacks = await this.feedbackModel.find().exec();

    const dtoArray = feedbacks.map(f => ({
      feedbackType: f.feedbackType,
      feedback: f.feedback,
    }));

    return dtoArray;
  }

  async findOne(id: string): Promise<Feedback> {
    const feedback = await this.feedbackModel.findById(id).exec();
    if (!feedback) {
      throw new NotFoundException('Feedback not found');
    }
    return feedback;
  }

  async update(id: string, updateFeedbackDto: UpdateFeedbackDto): Promise<Feedback> {
    const updatedFeedback = await this.feedbackModel.findByIdAndUpdate(id, updateFeedbackDto, { new: true });
    if (!updatedFeedback) {
      throw new NotFoundException('Feedback not found');
    }
    return updatedFeedback;
  }

  async remove(id: string): Promise<void> {
    const result = await this.feedbackModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Feedback not found');
    }
  }
}
