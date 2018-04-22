import { Request, Response, NextFunction } from 'express';
import { services } from './services';
export const fligthController = {
    getFlights: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const flights = await services.getFlights();
            res.send({ data: flights });
        } catch (error) {
            next({error});
        }
    }
};