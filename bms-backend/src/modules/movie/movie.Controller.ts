import * as MovieService from "./movie.service";
import { Request, Response, NextFunction } from "express";

export const createMovie = async(req: Request, res: Response, next : NextFunction) =>{
    try {
        const Movie = await MovieService.createMovie(req.body);
        res.status(201).json({
            success: true,
            data: Movie
        })
    } catch (error) {
        next(error)
    }
}

export const getMovies = async (req: Request, res: Response, next : NextFunction) =>{
    try {
        const movies = await MovieService.getAllMovies();
        res.status(200).json({
            success: true,
            data: movies
        })
    } catch (error) {
        next(error)
    }
}

export const getMovieById = async (req: Request, res: Response, next : NextFunction) =>{
    try {
        const movie = await MovieService.getAllMoviebyId(req.params.id);
        res.status(200).json({
            success: true,
            data: movie
        })
    } catch (error) {
        next(error);
    }
}
export const getTopMoviesByVotes = async (req: Request, res: Response, next : NextFunction) =>{
    try {
        const topmovies = await MovieService.getTopMoviesByVotes(5);
        res.status(200).json({
            success: true,
            data: topmovies
        })
    } catch (error) {
        next(error);
    }
}