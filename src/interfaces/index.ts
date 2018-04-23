import { Document } from 'mongoose';

export interface Error {
    status?: number;
    message?: string;
}

export interface IFlight extends Document {
    destination: {
        iata: string,
        name: string
    },
    image: string,
    price: string,
    segments: string
}