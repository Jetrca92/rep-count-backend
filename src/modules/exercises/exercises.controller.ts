import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common'
import { Exercise } from 'entities/exercise.entity'

import { CreateExerciseDto } from './dto/create-exercise.dto'
import { ExercisesService } from './exercises.service'

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Exercise[]> {
    return this.exercisesService.findAll()
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateExerciseDto): Promise<Exercise> {
    return this.exercisesService.create(dto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string): Promise<Exercise> {
    return this.exercisesService.remove(id)
  }
}
