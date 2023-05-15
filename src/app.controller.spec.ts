import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinstonLoggerServiceProvider } from './logger/providers/winston/winston.logger.service.provider';
import { AzureSecretsServiceProvider } from './secrets/providers/azure/azure.secrets.service.provider';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        WinstonLoggerServiceProvider,
        AzureSecretsServiceProvider,
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
