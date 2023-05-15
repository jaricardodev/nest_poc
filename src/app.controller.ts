import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SecretsService } from './secrets/secrets.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly secretsService: SecretsService,
  ) {
    secretsService.getSecret('test-secret').then((secret) => {
      console.log(secret);
    });
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
