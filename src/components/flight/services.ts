import Flight from './model';

export const services = {
    getFlights: async (id: string | any) => {
        try {
            return await (typeof id !== 'undefined' ? Flight.findById(id) : Flight.find());
        } catch (error) {
            return error;
        }
    }
};