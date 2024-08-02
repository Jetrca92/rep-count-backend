import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Track } from 'entities/track.entity'
import { AbstractService } from 'modules/common/abstract.service'
import { Repository } from 'typeorm'

import { CreateTrackDto } from './dto/create-track.dto'

@Injectable()
export class TracksService extends AbstractService {
  constructor(@InjectRepository(Track) private readonly tracksRepository: Repository<Track>) {
    super(tracksRepository)
  }

  async create(dto: CreateTrackDto): Promise<Track> {
    try {
      const track = this.tracksRepository.create({ ...dto })
      return this.tracksRepository.save(track)
    } catch (error) {
      Logger.error(error)
      throw new BadRequestException('Something went wrong while creating a new track.')
    }
  }
}
