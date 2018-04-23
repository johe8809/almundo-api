import Flight from './model';

export const services = {
    getFlights: async () => {
        try {
            return await Flight.find();
        } catch (error) {
            return error;
        }
    }
};