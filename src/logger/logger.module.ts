import { Module } from '@nestjs/common';
import { AzureLoggerServiceProvider } from './providers/azureLogger/azure.logger.service.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [AzureLoggerServiceProvider],
  exports: [AzureLoggerServiceProvider]
})
export class LoggerModule {}
