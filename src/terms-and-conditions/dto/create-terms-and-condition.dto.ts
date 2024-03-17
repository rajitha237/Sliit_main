import { ApiProperty } from '@nestjs/swagger';

export class CreateTermsAndConditionDto {

    @ApiProperty({ description: 'conditions' })
    conditions: string;
  }
  