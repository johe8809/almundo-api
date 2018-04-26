import Sugar from 'sugar';
import Flight from './model';
import { type } from 'os';

export const services = {
    getFlights: async (id: string | any) => {
        try {
            return await (typeof id !== 'undefined' ? Flight.findById(id) : Flight.find());
        } catch (error) {
            return error;
        }
    },
    getFlightsQs: async (fields: object | any) => {
        const { destination, origin, dateDeparture, dateArrival } = fields;
        try {
            let query = Object.assign({
                'destination.iata': destination,
                'origin.iata': origin,
                dateDeparture: typeof dateArrival === 'undefined' ? dateDeparture : dateArrival
            });
            return await Flight.find(query)
        } catch (error) {
            return error;
        }
    }
};