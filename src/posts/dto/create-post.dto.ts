import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: 'Test title', description: 'Post title' })
  @IsString({
    message: 'Title must be a string'
  })
  readonly title: string;

  @ApiProperty({ example: 'Test content', description: 'Post content' })
  @IsString({
    message: 'Content must be a string'
  })
  readonly content: string;

  @ApiProperty({ example: '1', description: 'User id' })
  @IsNumber({}, {
    message: 'User id must be a number'
  })
  readonly userId: number;
}