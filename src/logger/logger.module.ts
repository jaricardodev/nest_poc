import { Module } from '@nestjs/common';
import { WinstonLoggerServiceProvider } from './providers/winston/winston.logger.service.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [WinstonLoggerServiceProvider],
  exports: [WinstonLoggerServiceProvider],
})
export class LoggerModule {}
