import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from 'modules/users/users.service'
import { hash } from 'utils/bcrypt'

import { AuthDto } from './dto'
import { RegisterDto } from './dto/register.dto'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  login(dto: AuthDto) {
    return
  }

  async signup(dto: RegisterDto) {
    if (dto.password !== dto.confirm_password) {
      throw new BadRequestException('Passwords do not match!')
    }

    const hashPw = await hash(dto.password)
    return this.usersService.create({
      ...dto,
      password: hashPw,
    })
  }
}
