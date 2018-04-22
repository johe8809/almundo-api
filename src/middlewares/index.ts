import cors from 'cors';
import bodyParser from 'body-parser';

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