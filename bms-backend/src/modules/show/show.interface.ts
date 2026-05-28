import { Types } from "mongoose";
import { IMovie } from "../movie/movie.interface";
import { ITheater } from "../theater/theater.interface";

export interface IShow {
    _id?: string;
    movie: Types.ObjectId | IMovie;
    theater: Types.ObjectId | ITheater;
    location: string;
    format: "2D" | "3D" | "IMAX" | "4DX";
    audioType: string;
    startTime: string;
    date: string;
    priceMap: Record<string, number>;
    seatLayout: {
        row: string;
        seats: {
            number: number;
            status: "AVAILABLE" | "BOOKED" | "BLOCKED";
        }[];
    }[];
    createdAt?: Date;
    updatedAt?: Date;
} 