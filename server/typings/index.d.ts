declare let Logger: {
    info: (correlation_id: string, message: string, ...params) => void;
    error: (correlation_id: string, message: string, ...params) => void;
    warn: (correlation_id: string, message: string, ...params) => void;
    verbose: (correlation_id: string, message: string, ...params) => void;
    silly: (correlation_id: string, message: string, ...params) => void;
};
