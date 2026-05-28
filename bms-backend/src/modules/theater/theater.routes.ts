import { Express } from "express";
import * as TheaterController from "./theater.controller";
import { Router } from "express";
import { validate } from "../../middlewares/validate";
import { TheaterSchema } from "./theater.validation";

const router = Router();

router.post('/',validate(TheaterSchema), TheaterController.createTheater);
router.get('/', TheaterController.getTheaters);

export default router;