import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from 'modules/users/users.service'
import { compareHash, hash } from 'utils/bcrypt'

import { AuthDto } from './dto'
import { RegisterDto } from './dto/register.dto'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

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

  async validateUser(dto: AuthDto): Promise<{ access_token: string }> {
    const logger = new Logger('ValidateUserFunction')
    logger.log('Validating user...')
    const user = await this.usersService.findBy({ email: dto.email })
    if (!user) {
      throw new BadRequestException('Invalid credentials')
    }
    if (!(await compareHash(dto.password, user.password))) {
      throw new BadRequestException('Invalid credentials')
    }
    logger.log('User is valid')
    const payload = { sub: user.id, username: user.email }
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
