import { Column, Entity, OneToMany } from 'typeorm'

import { Base } from './base.entity'
import { Track } from './track.entity'

@Entity()
export class Exercise extends Base {
  @Column()
  name?: string

  @OneToMany(() => Track, (track) => track.exercise)
  tracks: Track[]
}
