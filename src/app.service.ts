import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { WINSTON_LOGGER_SERVICE } from './logger';
import { AZURE_SECRETS_SERVICE } from './secrets';
import { SecretsService } from './secrets';

@Injectable()
export class AppService {
  constructor(
    @Inject(WINSTON_LOGGER_SERVICE) private readonly logger: LoggerService,
    @Inject(AZURE_SECRETS_SERVICE) private readonly secrets: SecretsService,
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
    return 'Hello World!';
  }

  async getSecret(): Promise<string> {
    const secret = await this.secrets.getSecret('test-secret');
    console.log(secret);
    if (secret !== undefined) {
      return secret;
    }
    return '';
  }
}
