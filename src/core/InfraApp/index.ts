import express, { Request, Response, NextFunction } from 'express';
import http from 'http';
import config from 'config';
import bunyan from 'bunyan';

export default class InfraApp {
    private app: any;
    private server: any;
    private port = config.get('server.port') || 3000;
    private log = bunyan.createLogger({ name: 'almundo-api' })

    constructor() {
        this.app = express();
    }
    public mountMiddlewares(middlewareServer: any): void {
        Object.keys(middlewareServer).forEach((key) => {
            this.app.use(middlewareServer[key].handler);
        })
    }
    public mountRoutes(routes: any): void {
        Object.keys(routes).forEach((key) => {
            this.app.get(routes[key].mountPoint, routes[key].handler);
        })
    }
    public mountErrorMiddleware(errorMiddleware: any): void {
        Object.keys(errorMiddleware).forEach((key) => {
            this.app.use(errorMiddleware[key]);
        })
    }
    public appStart(): void {
        this.app.listen(this.port, () => {
            this.log.info(`Server running in port ${this.port}`);
        });
    }
}