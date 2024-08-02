import { IsDateString, IsNotEmpty, IsNumber, IsPositive, IsUUID } from 'class-validator'

export class CreateTrackDto {
  @IsNotEmpty()
  @IsDateString()
  date: Date

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  reps: number

  @IsNotEmpty()
  @IsUUID()
  exerciseId: string
}
