import { Express } from "express";
import * as MovieController from "./movie.Controller";
import { Router } from "express";
import { validate } from "../../middlewares/validate";
import { MovieSchema } from "./movie.validation";

const router = Router();

router.post('/',validate(MovieSchema), MovieController.createMovie);
router.get('/', MovieController.getMovies);
router.get('/top', MovieController.getTopMoviesByVotes);
router.get('/:id', MovieController.getMovieById);

export default router;