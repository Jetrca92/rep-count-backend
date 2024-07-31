import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { configValidationSchema } from 'config/schema.config'

import { AuthModule } from './auth/auth.module'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
    }),
    DatabaseModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
