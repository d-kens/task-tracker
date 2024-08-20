import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as process from 'process'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.WEB_DOMAIN,
  });

  await app.listen(process.env.PORT);
}

bootstrap().then(() =>
  Logger.log(
    `🚀 Application is running on: http://localhost:${process.env.PORT}`,
  ),
);
