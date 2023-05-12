import { WINSTON_LOGGER_SERVICE } from '../logger';
import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { DefaultAzureCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';

@Injectable()
export class SecretsService {
  private credential: DefaultAzureCredential;
  private vaultUrl: string;

  constructor(
    @Inject(WINSTON_LOGGER_SERVICE) private readonly logger: LoggerService,
  ) {
    this.credential = new DefaultAzureCredential();
    const vaultName = process.env['AZ_KEY_VAULT_NAME'] || '';
    this.vaultUrl = `https://${vaultName}.vault.azure.net`;
  }

  async getSecret(secretName: string): Promise<string | undefined> {
    const client = new SecretClient(this.vaultUrl, this.credential);
    const secret = await client.getSecret(secretName);
    return secret.value;
  }
}
