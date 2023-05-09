import * as winston from 'winston';
import { Injectable, LoggerService, LogLevel } from '@nestjs/common';

const WINSTON_LOGGER_SERVICE = 'WinstonLoggerService';

@Injectable()
class WinstonLoggerService implements LoggerService {
  private readonly logger: winston.Logger;

  private readonly customLevels = {
    levels: {
      error: 0,
      info: 1,
      warn: 2,
      debug: 3,
      verbose: 4,
    },
    colors: {
      error: 'red',
      info: 'blue',
      warn: 'yellow',
      debug: 'green',
      verbose: 'cyan'
    }
  };

  private readonly consoleTransports = [
    new winston.transports.Console({
        level: 'debug',
    }),
  ];

  constructor() {
    winston.addColors(this.customLevels.colors);
    this.logger = winston.createLogger({
      transports: this.consoleTransports,
      format: winston.format.json(), 
      levels: this.customLevels.levels
    });
  }

  verbose?(message: any, ...optionalParams: any[]) {
    this.logger.verbose(message, optionalParams);
  }
  setLogLevels?(logLevels: LogLevel[]) {
    const filteredWinstonLevels = logLevels.reduce((a, v) => (
       v === 'log'
        ? {
          ...a, ['info']: this.customLevels.levels['info']
        }
        : {
          ...a, [v]: this.customLevels.levels[v]
      }
    ), {});

    this.logger.levels = filteredWinstonLevels;
  }
  
  warn(message: string, metadata: Record<any, any>): void {
    this.logger.warn(message, metadata);
  }
  log(message: string, metadata: Record<any, any>): void {
    this.logger.info(message, metadata);
  }
  debug?(message: string, metadata: Record<any, any>): void {
    this.logger.debug(message, metadata);
  }
  error(message: string, metadata: Record<any, any>): void {
    this.logger.error(message, metadata);
  }
}

const WinstonLoggerServiceProvider = {
  provide: WINSTON_LOGGER_SERVICE,
  useClass: WinstonLoggerService,
};

export { WinstonLoggerServiceProvider, WINSTON_LOGGER_SERVICE };
