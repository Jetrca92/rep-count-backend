import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './modules/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })

  const PORT = process.env.PORT || 8080
  await app.listen(PORT)
  Logger.log(`Server is running on http://localhost:${PORT}`, 'Bootstrap')
}
bootstrap()
