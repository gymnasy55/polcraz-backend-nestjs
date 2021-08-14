import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';

class TokenResponse {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdG1haWwuY29tIiwiaWQiOjQsInJvbGVzIjpbeyJpZCI6MiwibmFtZSI6IlVTRVIiLCJkZXNjcmlwdGlvbiI6IlVzZXIiLCJjcmVhdGVkQXQiOiIyMDIxLTA4LTEzVDE5OjE0OjQxLjQ0NVoiLCJ1cGRhdGVkQXQiOiIyMDIxLTA4LTEzVDE5OjE0OjQxLjQ0NVoiLCJVc2VyUm9sZXMiOnsiaWQiOjIsInJvbGVJZCI6MiwidXNlcmlkIjo0fX1dLCJpYXQiOjE2Mjg4ODQxNDcsImV4cCI6MTYyODk3MDU0N30.ZAcS7Tx-70GON9cRGozfPDTY3t1WSTp8Xp0CczcpjAs',
    description: 'Token',
  })
  token: string;
}

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: "User's logging in" })
  @ApiResponse({ status: 200, type: TokenResponse })
  @Post('/login')
  login(@Body() dto: CreateUserDto) {
    return this.authService.login(dto);
  }

  @ApiOperation({ summary: "User's registration" })
  @ApiResponse({ status: 200, type: TokenResponse })
  @Post('/register')
  register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }
}
