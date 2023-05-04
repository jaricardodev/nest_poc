import { Inject, Injectable } from '@nestjs/common';
import { AZURE_LOGGER_SERVICE, ILoggerService } from './logger';

@Injectable()
export class AppService {
  constructor(@Inject(AZURE_LOGGER_SERVICE) private readonly logger: ILoggerService) {
        
  }
  
  getHello(): string {
    this.logger.info('Hello World from info!', { data: {whatever: "test data"} });    
    this.logger.debug('Hello World from debug!', { data: {whatever: "test data"} });
    this.logger.warn('Hello World from warn!', { data: {whatever: "test data"} });
    this.logger.error('Hello World from error!', { data: {whatever: "test data"} });
    return 'Hello World!';
  }
}
