import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Role name' })
  @IsString({
    message: 'Role name reason must be a string'
  })
  readonly roleName: string;

  @ApiProperty({ example: '1', description: 'User id' })
  @IsNumber({}, {
    message: 'User id must be a number'
  })
  readonly userId: number;
}
