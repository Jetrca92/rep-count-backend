import { InternalServerErrorException, Logger } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

export const hash = async (data: string, salt = 10): Promise<string> => {
  const logger = new Logger('HashFunction')
  try {
    const generatedSalt = await bcrypt.genSalt(salt)
    return bcrypt.hash(data, generatedSalt)
  } catch (error) {
    logger.error(error)
    throw new InternalServerErrorException('Something went wrong while hashing password.')
  }
}

export const compareHash = async (data: string | Buffer, encryptedData: string): Promise<boolean> => {
  const logger = new Logger('CompareHashFunction')
  try {
    return bcrypt.compare(data, encryptedData)
  } catch (error) {
    logger.error(error)
    throw new InternalServerErrorException('Something went wrong while comparing hash')
  }
}
