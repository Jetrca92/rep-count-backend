import { IsNotEmpty, IsString } from 'class-validator'

import { AuthDto } from './auth.dto'

export class RegisterDto extends AuthDto {
  @IsString()
  @IsNotEmpty()
  confirm_password: string
}
