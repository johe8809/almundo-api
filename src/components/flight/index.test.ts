import path from 'path';
process.env.NODE_CONFIG_DIR = path.join(__dirname, '../../config/env');
import express from 'express';
import request from 'supertest';
import InfraApp from '../../core/InfraApp';
import Server from '../../index';
import { routerServer } from '../../routes';
import { middlewareServer } from '../../middlewares';
import { db } from '../../config/database';
import config from 'config';

const mountRoutes = (app) => {
    routerServer.map((routes: any) => {
        Object.keys(routes).forEach((key) => {
            app.get(routes[key].mountPoint, routes[key].handler);
        });
    });

}
describe('Test of Flight component', () => {
    const app = express();
    db.connect();
    mountRoutes(app);

    it('It respond /flight', async () => {
        return await request(app).get('/flight').then((res) => expect(200).toEqual(res.status));
    });
})