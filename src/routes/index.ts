import { fligthController } from '../components';

export const routerServer = {
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