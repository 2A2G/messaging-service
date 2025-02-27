import { Router } from "express";
import { sendMailWelcome } from "../controllers/emailController.js";

const router = Router();

router.post("/", sendMailWelcome);

export default router;
