import { model } from 'mongoose';
import FlightSchema from './schema';
import { IFlight } from '../../interfaces';

export default model<IFlight>('Flight', FlightSchema);