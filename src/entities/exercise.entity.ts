import { Entity, OneToMany } from 'typeorm'

import { Base } from './base.entity'
import { Track } from './track.entity'

@Entity()
export class Exercise extends Base {
  name: string

  @OneToMany(() => Track, (track) => track.exercise)
  tracks: Track[]
}
