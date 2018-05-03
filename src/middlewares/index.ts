import { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { log } from '../config/logger';
import { Error } from '../interfaces';

export const middlewareServer = {
    cors: {
        handler: cors()
    },
    bodyParser: {
        handler: bodyParser.urlencoded({ extended: true })
    },
    jsonParser: {
        handler: bodyParser.json()
    }
}

export const errorMiddleware = {
    errorHandler: (err: Error, req: Request, res: Response, next: NextFunction) => {
        log.error(err);
        res.status(err.status || 500);
        res.send({ error: err.message });
    }
}