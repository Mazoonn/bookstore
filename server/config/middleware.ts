import requestLogger from "./request-logger";
import {randomUUID} from "node:crypto";
import {NextFunction} from "express";
const cors = require('cors');
import * as bodyParser from 'body-parser';

export function correlationIdMiddleware(req: Request, res: Response, next: NextFunction) {
    // @ts-ignore
    if(req.correlation_id){
        next();
    }
    const correlationId = randomUUID();
    // @ts-ignore
    req.correlation_id = correlationId;
    next();
}
// custom middleware
export const middleWare = [bodyParser(), cors(),correlationIdMiddleware, requestLogger];