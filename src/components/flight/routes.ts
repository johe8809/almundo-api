import { fligthController } from './controller';

export const flightRoutes = {
    getFlights: {
        verb: 'get',
        mountPoint: '/flight',
        handler: fligthController.getFlights
    },
    getFlight: {
        verb: 'get',
        mountPoint: '/flight/:id',
        handler: fligthController.getFlights
    },
    getFlightsQS: {
        verb: 'get',
        mountPoint: '/flights',
        handler: fligthController.getFlightsQs
    }
}