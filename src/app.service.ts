import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { WINSTON_LOGGER_SERVICE } from './logger';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject(WINSTON_LOGGER_SERVICE) private readonly logger: LoggerService,
    private readonly configService: ConfigService,
  ) {}

  getHello(): string {
    this.logger.log('Hello World from info!', {
      data: { whatever: 'test data' },
    });
    this.logger.warn('Hello World from warn!', {
      data: { whatever: 'test data' },
    });
    this.logger.error('Hello World from error!', {
      data: { whatever: 'test data' },
    });
    this.logger.log(
      this.configService.get<string>('APPLICATIONINSIGHTS_CONNECTION_STRING'),
    );
    return 'Hello World!';
  }
}
