import { fligthController } from '../components';

export const routerServer = {
    getFlights: {
        verb: 'get',
        mountPoint: '/flight',
        handler: fligthController.getFlights
    }
}