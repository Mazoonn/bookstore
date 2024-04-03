import logger from "./logger";

export default function requestLogger(req: any, res: any, next: any) {
    logger.info(req.correlation_id, '*************************************************');
    logger.silly(req.correlation_id, '****************** New Request ******************');
    let result = {
        log_action: 'REQUEST',
        operation_id: req.correlation_id,
        timestamp: new Date().getTime(),
        source_ip_address: req.ip ? req.ip : null,
        method: req.method ? req.method : null,
        // headers: req.headers ? req.headers : null,
        url: req.url ? req.url : null,
        route: req.path ? req.path : null,
        query_params: req.query ? req.query : null,
        body: req.body,
    };
    logger.verbose(req.correlation_id, `Request logger - params:`, result);
    next();
}
