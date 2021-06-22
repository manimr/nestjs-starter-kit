import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database/database.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `environments/.${process.env.NODE_ENV}.env`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'staging')
          .default('development'),
        DB_HOST: Joi.string().default('127.0.0.1'),
        DB_PORT: Joi.number().default(5432),
        DB_USER: Joi.string().default('postgres'),
        DB_PASSWORD: Joi.string().default('password'),
        DB_NAME: Joi.string().default('dvd-rental'),
      }),
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
