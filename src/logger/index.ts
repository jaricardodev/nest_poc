import { LoggerModule } from '../logger/logger.module';
import {AZURE_LOGGER_SERVICE} from '../logger/providers/azureLogger/azure.logger.service.provider';
import { ILoggerService } from './logger.service.interface';

export {LoggerModule, AZURE_LOGGER_SERVICE, ILoggerService}