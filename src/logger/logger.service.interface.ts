
export interface ILoggerService {
    error(message: string, metadata:Record<any, any>): void;
    warn(message: string, metadata:Record<any, any>): void;
    info(message: string, metadata:Record<any, any>): void;
    debug(message: string, metadata:Record<any, any>): void;
}