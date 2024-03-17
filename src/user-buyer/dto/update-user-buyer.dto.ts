// update-user-buyer.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateUserBuyerDto } from './create-user-buyer.dto';

export class UpdateUserBuyerDto extends PartialType(CreateUserBuyerDto) {}
