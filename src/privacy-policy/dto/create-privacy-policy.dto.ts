
import { ApiProperty } from '@nestjs/swagger';

export class CreatePrivacyPolicyDto {

    @ApiProperty({ description: 'policy' })
    policy: string;
  }

  