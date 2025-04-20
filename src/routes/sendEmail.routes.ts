import { Router } from "express";
import { welcome } from "../controllers/sendEmail.controller";

const router = Router();

router.post("/welcome", welcome);

export default router;
