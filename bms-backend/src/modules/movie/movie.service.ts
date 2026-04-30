import { IMovie } from "./movie.interface";
import { MovieModel } from "./movie.model";

// create movie 
export const createMovie = async (movie: IMovie) =>{
    return await MovieModel.create(movie);
}

// get all movies
export const getAllMovies = async () =>{
    return await MovieModel.find();
}

// update movie by id
export const getAllMoviebyId = async (id: string) =>{
    return await MovieModel.findById(id);
}

// get TopMovie by Votes
export const getTopMoviesByVotes = async (limit: number)=>{
    return await MovieModel.find().sort({votes: -1}).limit(limit);
}