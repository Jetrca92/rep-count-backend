import { Column, Entity, ManyToOne } from 'typeorm'

import { Base } from './base.entity'
import { Exercise } from './exercise.entity'

@Entity()
export class Track extends Base {
  @Column()
  date: Date

  @Column()
  reps: number

  @ManyToOne(() => Exercise, (exercise) => exercise.tracks)
  exercise: Exercise
}
