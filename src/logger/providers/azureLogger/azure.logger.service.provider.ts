import { LoggerService } from "@nestjs/common";

const AZURE_LOGGER_SERVICE = "AzureLoggerService";

class AzureLoggerService implements LoggerService {
    warn(message: string, metadata: Record<any, any>): void {
        console.log(message, metadata);
    }
    log(message: string, metadata: Record<any, any>): void {
        console.log(message, metadata);
    }
    debug(message: string, metadata: Record<any, any>): void {
        console.log(message, metadata);
    }
    error(message: string, metadata: Record<any, any>): void {
        console.log(message, metadata);
    }
}

const AzureLoggerServiceProvider = {
    provide: AZURE_LOGGER_SERVICE,
    useClass: AzureLoggerService
};

export { AzureLoggerServiceProvider, AZURE_LOGGER_SERVICE };