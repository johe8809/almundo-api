import mongoose from 'mongoose';
import config from 'config';
import { log } from '../logger';

const conn = config.get('server.db');

export const db = {
    connect(): void {
        mongoose.connect(`${conn}`);
        mongoose.connection
            .once('open', () => log.error('MongoDB connection success'))
            .on('error', e => {
                log.error(e);
                throw e;
            });
    }
}