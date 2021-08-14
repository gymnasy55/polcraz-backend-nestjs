import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: '1', description: 'User id' })
  @IsNumber({}, {
    message: 'User id must be a number'
  })
  readonly userId: number;

  @ApiProperty({ example: 'Bad words', description: 'Reason of ban' })
  @IsString({
    message: 'Ban reason must be a string'
  })
  readonly banReason: string;
}
