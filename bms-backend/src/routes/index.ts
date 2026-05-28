import express from "express";
import Router from "express";
import movieRouter from "../modules/movie/movie.route";
import TheaterRouter from "../modules/theater/theater.routes";
import showRouter from "../modules/show/show.routes";

const router = express.Router();

router.use("/movies", movieRouter);
router.use("/theaters", TheaterRouter);
router.use("/shows", showRouter);

export default router;