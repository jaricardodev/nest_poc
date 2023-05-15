import { Module } from '@nestjs/common';
import { AzureSecretsServiceProvider } from './providers/azure/azure.secrets.service.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [AzureSecretsServiceProvider],
  exports: [AzureSecretsServiceProvider],
})
export class SecretsModule {}
