import { Express } from "express";
import * as MovieController from "./movie.Controller";
import { Router } from "express";

const router = Router();

router.post('/', MovieController.createMovie);
router.get('/', MovieController.getMovies);
router.get('/top', MovieController.getTopMoviesByVotes);
router.get('/:id', MovieController.getMovieById);

export default router;