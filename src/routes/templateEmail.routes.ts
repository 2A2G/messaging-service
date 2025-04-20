import { Router } from "express";
import {
  getAllTemplates,
  getTemplateByType,
  createTemplate,
  updateTemplate,
  deleteTemplate,
} from "../controllers/templateEmail.controller";

const router = Router();

router.get("/", getAllTemplates as any);
router.get("/:type", getTemplateByType as any);
router.post("/", createTemplate as any);
router.put("/:id", updateTemplate as any);
router.delete("/:id", deleteTemplate as any);

export default router;