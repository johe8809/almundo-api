import mongoose from 'mongoose';

const FlightSchema = new mongoose.Schema({
    destination: {
        iata: String,
        name: String
    },
    origin: {
        iata: String,
        name: String
    },
    dateDeparture: String,
    hourDeparture: String,
    dateArrival: String,
    hourArrival: String,
    image: String,
    price: String,
    segments: String
});
export default FlightSchema;