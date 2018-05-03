import { Document } from 'mongoose';

interface Error {
    status?: number;
    message?: string;
}

interface IFlight extends Document {
    destination: {
        iata: string,
        name: string
    },
    image: string,
    price: string,
    segments: string
}