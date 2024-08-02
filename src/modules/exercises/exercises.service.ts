import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Exercise } from 'entities/exercise.entity'
import { AbstractService } from 'modules/common/abstract.service'
import { Repository } from 'typeorm'

import { CreateExerciseDto } from './dto/create-exercise.dto'

@Injectable()
export class ExercisesService extends AbstractService {
  constructor(@InjectRepository(Exercise) private readonly exerciseRepository: Repository<Exercise>) {
    super(exerciseRepository)
  }

  async create(dto: CreateExerciseDto): Promise<Exercise> {
    try {
      const exercise = this.exerciseRepository.create(dto)
      return this.exerciseRepository.save(exercise)
    } catch (error) {
      Logger.error(error)
      throw new BadRequestException('Something went wrong while creating a new exercise')
    }
  }
}
