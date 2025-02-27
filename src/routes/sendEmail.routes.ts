import { Router } from "express";
import { welcome } from "../controllers/sendEmailController.js";

const router = Router();

router.post("/welcome", welcome);

export default router;
