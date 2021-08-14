import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Role name' })
  @IsString({
    message: 'Role name must be a string',
  })
  readonly name: string;

  @ApiProperty({ example: 'Administrator', description: 'Role description' })
  @IsString({
    message: 'Role description must be a string',
  })
  readonly description: string;
}
