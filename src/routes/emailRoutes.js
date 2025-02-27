import { Router } from "express";
import { sendTestEmail } from "../controllers/emailController.js";

const router = Router();

router.post("/", sendTestEmail);

export default router;
