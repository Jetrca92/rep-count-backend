import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common'

import { AuthService } from './auth.service'
import { AuthDto } from './dto'
import { RegisterDto } from './dto/register.dto'
import { AuthGuard } from './guards/auth.guard'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Get('')
  hello() {
    return 'hello'
  }

  @Post('signup')
  signup(@Body() dto: RegisterDto) {
    console.log({
      dto,
    })
    return this.authService.signup(dto)
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.validateUser(dto)
  }
}
