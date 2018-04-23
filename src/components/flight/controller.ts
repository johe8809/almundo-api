import { Request, Response, NextFunction } from 'express';
import { services } from './services';

export const fligthController = {
    getFlights: async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
            const data = await services.getFlights(id);
            return res.send({ data });
        } catch (error) {
            next({error});
        }
    }
};