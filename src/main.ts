import * as applicationinsights from 'applicationinsights';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_LOGGER_SERVICE } from './logger';
import { LogLevel } from '@nestjs/common';

async function bootstrap() {
  if (process.env.APPLICATIONINSIGHTS_CONNECTION_STRING !== undefined) {
    applicationinsights.setup().start();
  }
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger: (process.env.LOG_LEVELS?.split(',') as LogLevel[]) ?? [
      'error',
      'log',
      'warn',
    ],
  });
  app.useLogger(app.get(WINSTON_LOGGER_SERVICE));

  await app.listen(3000);
}
bootstrap();
