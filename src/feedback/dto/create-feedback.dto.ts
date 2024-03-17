import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedbackDto {
  @ApiProperty({ description: 'Type of feedback' })
  feedbackType: string;

  @ApiProperty({ description: 'Feedback message' })
  feedback: string;
}
