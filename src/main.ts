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
  });
  app.useLogger(app.get(WINSTON_LOGGER_SERVICE));

  app
    .get(WINSTON_LOGGER_SERVICE)
    .setLogLevels(
      (process.env.LOG_LEVELS?.split(',') as LogLevel[]) ?? [
        'error',
        'log',
        'warn',
      ],
    );
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
