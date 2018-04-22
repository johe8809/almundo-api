import mongoose from 'mongoose';

const FlightSchema = new mongoose.Schema({
    destination: {
        iata: String,
        name: String
    },
    image: String,
    price: String,
    segments: String
});
export default FlightSchema;