import bunyan from 'bunyan';

export const log = bunyan.createLogger({
    name: 'almundo-api',
    streams: [
        {
            level: 'info',
            path: 'almundo.log'
        },
        {
            level: 'error',
            path: 'almundo.log'
        }
    ]
});