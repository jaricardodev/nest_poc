import { Module } from '@nestjs/common';
import { AzureLoggerServiceProvider } from './providers/azureLogger/azure.logger.service.provider';
import { WinstonLoggerServiceProvider } from './providers/winston/winston.logger.service.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [AzureLoggerServiceProvider, WinstonLoggerServiceProvider],
  exports: [AzureLoggerServiceProvider, WinstonLoggerServiceProvider]
})
export class LoggerModule {}
