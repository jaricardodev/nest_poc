import { Injectable } from '@nestjs/common';
import { DefaultAzureCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';
import { SecretsService } from '../../secrets.service.interface';

const AZURE_SECRETS_SERVICE = 'AzureSecretsService';

@Injectable()
class AzureSecretsService implements SecretsService {
  private readonly credential: DefaultAzureCredential;
  private readonly vaultUrl: string;

  constructor() {
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

const AzureSecretsServiceProvider = {
  provide: AZURE_SECRETS_SERVICE,
  useClass: AzureSecretsService,
};

export { AzureSecretsServiceProvider, AZURE_SECRETS_SERVICE };
