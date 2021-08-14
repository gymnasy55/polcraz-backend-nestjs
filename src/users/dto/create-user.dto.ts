import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'test@testmail.com', description: 'Email' })
  @IsString({
    message: 'Email must be a string',
  })
  @IsEmail(
    {},
    {
      message: 'Incorrect email',
    },
  )
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'Password' })
  @IsString({
    message: 'Password must be a string',
  })
  @Length(4, 16, {
    message:
      'Password length must be greater than or equals 4 and less than or equal 16',
  })
  readonly password: string;
}
