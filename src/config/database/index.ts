import mongoose from 'mongoose';
import config from 'config';

const conn = config.get('server.db');
export const db = {
    connect(): void {
        mongoose.connect(`${conn}`);
        mongoose.connection
            .once('open', () => console.log('MongoDB connection success'))
            .on('error', e => {
                throw e;
            });
    }
}