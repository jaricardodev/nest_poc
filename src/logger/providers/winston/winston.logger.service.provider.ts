import * as winston from 'winston';
import { LoggerService, LogLevel } from '@nestjs/common';

const WINSTON_LOGGER_SERVICE = "WinstonLoggerService";

class WinstonLoggerService implements LoggerService {
    private readonly logger: winston.Logger;
    
    constructor() {
        this.logger = winston.createLogger({
            transports: transports,
        });
    }
    verbose?(message: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
    setLogLevels?(levels: LogLevel[]) {
        throw new Error('Method not implemented.');
    }

    warn(message: string, metadata: Record<any, any>): void {
        this.logger.warn(message, metadata);
    }
    log(message: string, metadata: Record<any, any>): void {
        this.logger.info(message, metadata);
    }
    debug(message: string, metadata: Record<any, any>): void {
        this.logger.debug(message, metadata);
    }
    error(message: string, metadata: Record<any, any>): void {
        this.logger.error(message, metadata);
    }
}

const WinstonLoggerServiceProvider = {
    provide: WINSTON_LOGGER_SERVICE,
    useClass: WinstonLoggerService
};

export { WinstonLoggerServiceProvider, WINSTON_LOGGER_SERVICE };


const transports = [
    new winston.transports.File({
        filename: `logs/error.log`,
        level: 'error',
        format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
      }),
      // logging all level
      new winston.transports.File({
        filename: `logs/combined.log`,
        format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
      }),
      new winston.transports.Console({
       format: winston.format.combine(
         winston.format.cli(),
         winston.format.splat(),
         winston.format.timestamp(),
         winston.format.printf((info) => {
           return `${info.timestamp} ${info.level}: ${info.message}`;
         }),
        ),
    }),
];
