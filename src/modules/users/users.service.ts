import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'entities/user.entity'
import { AbstractService } from 'modules/common/abstract.service'
import { Repository } from 'typeorm'

import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService extends AbstractService {
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {
    super(usersRepository)
  }

  async create(dto: CreateUserDto): Promise<User> {
    const logger = new Logger('CreateUserFunction')

    const user = await this.findBy({ email: dto.email })
    if (user) {
      throw new BadRequestException('User with that email already exists.')
    }
    try {
      const newUser = this.usersRepository.create({ ...dto })
      return this.usersRepository.save(newUser)
    } catch (error) {
      logger.error(error)
      throw new BadRequestException('Something went wrong while creatig a new user.')
    }
  }
}
