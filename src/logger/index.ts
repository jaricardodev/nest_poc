import { LoggerModule } from '../logger/logger.module';
import { AZURE_LOGGER_SERVICE } from '../logger/providers/azureLogger/azure.logger.service.provider';
import { WINSTON_LOGGER_SERVICE } from '../logger/providers/winston/winston.logger.service.provider';

export {LoggerModule, AZURE_LOGGER_SERVICE, WINSTON_LOGGER_SERVICE}