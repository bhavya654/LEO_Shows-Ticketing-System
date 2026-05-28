import {TheaterModel} from "./theater.model";
import { ITheater } from "./theater.interface";

//Create Theater
export const createTheater = async (data : ITheater): Promise<ITheater> => {
    return await TheaterModel.create(data);
}

//Get All Theater
export const getAllTheater = async (): Promise<ITheater[]> => {
    return await TheaterModel.find();
}

//Get Theater by Id
export const getTheaterById = async (id: string): Promise<ITheater | null> => {
    return await TheaterModel.findById(id);
}

//Get Theater by State
export const getTheaterByState = async (state: string): Promise<ITheater[]> => {
    return await TheaterModel.find({ state: {$regex: state, $options: 'i'} });
}