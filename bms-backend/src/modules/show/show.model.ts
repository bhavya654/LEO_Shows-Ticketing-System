import mongoose from "mongoose";
import { IShow } from "./show.interface";

const ShowSchema = new mongoose.Schema<IShow>({
    movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
    theater: { type: mongoose.Schema.Types.ObjectId, ref: "Theater", required: true },
    location: { type: String, required: true },
    format: { 
        type: String, 
        enum: ["2D", "3D", "IMAX", "4DX"], 
        required: true },
    audioType: { type: String, default:"Dolby Atmos", required: true },
    startTime: { type: String,  required: true },
    date: { type: String, required: true },
    priceMap: { type: Map, of: Number, required: true, default: {} },
    seatLayout: {
        type: [
            {
                row: { type: String, required: true },
                seats: [
                    {
                        number: { type: Number, required: true },
                        status: { type: String, enum: ["AVAILABLE", "BOOKED", "BLOCKED"], required: true }
                    }
                ]
            }
        ],
        default: []
    }
}, { timestamps: true });

export const ShowModel = mongoose.model<IShow>("Show", ShowSchema);