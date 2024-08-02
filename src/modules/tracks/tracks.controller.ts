import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { Track } from 'entities/track.entity'

import { CreateTrackDto } from './dto/create-track.dto'
import { TracksService } from './tracks.service'

@Controller('tracks')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Track[]> {
    return this.tracksService.findAll()
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateTrackDto): Promise<Track> {
    return this.tracksService.create(dto)
  }
}
