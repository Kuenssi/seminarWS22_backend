import { ApiProperty } from '@nestjs/swagger';

import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  creator: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  content: string;

  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(10)
  @ApiProperty()
  priority: number;
}
