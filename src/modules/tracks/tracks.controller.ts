import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common'
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

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string): Promise<Track> {
    return this.tracksService.remove(id)
  }
}
