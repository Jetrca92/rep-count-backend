import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { User } from 'entities/user.entity'

import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateUserDto): Promise<User> {
    return this.usersService.create(dto)
  }
}
