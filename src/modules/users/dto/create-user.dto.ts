import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'
import { Match } from 'decorators/match.decorator'

export class CreateUserDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({ required: true })
  @IsNotEmpty()
  password: string

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Match(CreateUserDto, (field) => field.password, { message: 'Passwords do not match.' })
  confirm_password: string
}
