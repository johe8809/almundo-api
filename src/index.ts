process.env.NODE_CONFIG_DIR = `${__dirname}/config/env`;
import 'jest';
import InfraApp from './core/InfraApp';
import { db } from './config/database';
import { middlewareServer } from './middlewares';
import { errorMiddleware } from './middlewares'
import { routerServer } from './routes';

export default class Server extends InfraApp {
    constructor() {
        super();
        db.connect();
        this.mountMiddlewares(middlewareServer);
        this.mountErrorMiddleware(errorMiddleware);
        this.mountRoutes(routerServer);
    }
    public static bootstrap(): Server {
        return new Server;
    }
}
Server.bootstrap().appStart()