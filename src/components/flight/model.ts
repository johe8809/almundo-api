import mongoose, { Model } from 'mongoose';
import FlightSchema from './schema';

export interface IFlight extends mongoose.Document {
    destination: {
        iata: string,
        name: string
    },
    image: string,
    price: string,
    segments: string
}
export default mongoose.model<IFlight>('Flight', FlightSchema);