import express from "express";
import * as ShowController from "./show.controller";

const router = express.Router();

router.post("/", ShowController.createController as express.RequestHandler);
router.get("/search", ShowController.getShowsByMovieDateLocation as express.RequestHandler);
router.get("/:id", ShowController.getShowById as express.RequestHandler);
router.put("/seat-status", ShowController.updateSeatStatus as express.RequestHandler);

export default router;