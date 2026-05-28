import mongoose from "mongoose";
import { ITheater } from "./theater.interface";
// removed unused import

const theaterSchema = new mongoose.Schema<ITheater>(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    city: {
      // cast to any to satisfy SchemaDefinition typing when interface types differ
      type: [String] as any,
      required: true,
    },
    state: {
      type: [String] as any,
      required: true,
    }
  }, { timestamps: true,}
);
export const TheaterModel = mongoose.model<ITheater>("Theater", theaterSchema);