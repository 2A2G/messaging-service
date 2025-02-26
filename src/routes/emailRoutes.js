import { Router } from "express";
import { sendTestEmail } from "../controllers/emailController.js";

const router = Router();

router.get("/", sendTestEmail);

export default router;