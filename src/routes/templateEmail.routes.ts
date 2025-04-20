import express from "express";
import {
  getAllTemplates,
  getTemplateByType,
  createTemplate,
  updateTemplate,
  deleteTemplate,
} from "../controllers/templateEmail.controller"; // Importa desde el controlador

const router = express.Router();

router.get("/", getAllTemplates);
router.get("/:type", getTemplateByType);
router.post("/", createTemplate);
router.put("/:id", updateTemplate);
router.delete("/:id", deleteTemplate);

export default router;