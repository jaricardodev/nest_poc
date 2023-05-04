import { ILoggerService } from "../../../logger/logger.service.interface";


const AZURE_LOGGER_SERVICE = "AzureLoggerService";

class AzureLoggerService implements ILoggerService {
    warn(message: string, metadata: Record<any, any>): void {
        this.log(message, metadata);
    }
    info(message: string, metadata: Record<any, any>): void {
        this.log(message, metadata);
    }
    debug(message: string, metadata: Record<any, any>): void {
        this.log(message, metadata);
    }
    error(message: string, metadata: Record<any, any>): void {
        this.log(message, metadata);
    }

    log(message: string, metadata: Record<any, any>) {
        console.log(message, JSON.stringify(metadata));
    }
}

const AzureLoggerServiceProvider = {
    provide: AZURE_LOGGER_SERVICE,
    useClass: AzureLoggerService
};

export { AzureLoggerServiceProvider, AZURE_LOGGER_SERVICE };