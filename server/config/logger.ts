import * as winston from 'winston';

/*Log utils end*/
const winstonDevLogger = winston.createLogger({
    level: 'silly',
    format: winston.format.printf((info) => {
        const time = new Date();
        return `${info.operation_id ? info.operation_id + ' |' : ''} ${info.level} | ${time.getTime()} | ${info.message} ${info.params !== '[]' ? `| ${info.params}` : ''}`;
    }),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'all-error-logs.log',
            level: 'error',
            maxsize: 5000000,
            maxFiles: 1,
            tailable: true,
        }),
        new winston.transports.File({
            filename: 'all-logs.log',
            maxsize: 5000000,
            maxFiles: 1,
            tailable: true,
        }),
    ],
});

const logger = {
    log: function(correlation_id: any, level: any, message: string, params: any) {
        winstonDevLogger.log.apply(winstonDevLogger, [
            level,
            {
                operation_id: correlation_id,
                message: message,
                params: JSON.stringify(params),
            },
        ]);
    },
    error: function(correlation_id = null, message: string, ...params: any) {
        this.log(correlation_id, 'error', message, params);
    },
    warn: function(correlation_id = null, message: string, ...params: any) {
        this.log(correlation_id, 'warn', message, params);
    },
    verbose: function(correlation_id = null, message: string, ...params: any) {
        this.log(correlation_id, 'verbose', message, params);
    },
    info: function(correlation_id = null, message: string, ...params: any) {
        this.log(correlation_id, 'info', message, params);
    },
    silly: function(correlation_id = null, message: string, ...params: any) {
        this.log(correlation_id, 'silly', message, params);
    },
};

export default logger;