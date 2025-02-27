import express from "express";
import { getAllTemplates, createTemplate, updateTemplate, deleteTemplate, getTemplateByType } from "../controllers/templateEmail.controller";

const router = express.Router();

router.get("/", getAllTemplates);
router.get("/:type", getTemplateByType);
router.post("/", createTemplate);
router.put("/:id", updateTemplate);
router.delete("/:id", deleteTemplate);

export default router;
