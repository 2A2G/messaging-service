"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const templateEmail_controller_1 = require("../controllers/templateEmail.controller"); // Importa desde el controlador
const router = express_1.default.Router();
router.get("/", templateEmail_controller_1.getAllTemplates);
router.get("/:type", templateEmail_controller_1.getTemplateByType);
router.post("/", templateEmail_controller_1.createTemplate);
router.put("/:id", templateEmail_controller_1.updateTemplate);
router.delete("/:id", templateEmail_controller_1.deleteTemplate);
exports.default = router;
