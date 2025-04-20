"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTemplate = exports.updateTemplate = exports.createTemplate = exports.getTemplateByType = exports.getAllTemplates = void 0;
const templateEmail_service_1 = __importDefault(require("../services/templateEmail.service"));
// Obtener todos los templates
const getAllTemplates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const templates = yield templateEmail_service_1.default.getAllTemplates();
        res.status(200).json(templates);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener los templates" });
    }
});
exports.getAllTemplates = getAllTemplates;
// Obtener template por tipo
const getTemplateByType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type } = req.params;
        const template = yield templateEmail_service_1.default.getTemplateByType(type);
        if (!template) {
            return res.status(404).json({ error: "Template no encontrado" });
        }
        res.status(200).json(template);
    }
    catch (error) {
        res.status(500).json({ error: "Error al buscar el template" });
    }
});
exports.getTemplateByType = getTemplateByType;
// Crear un nuevo template
const createTemplate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, body } = req.body;
        if (!type || !body) {
            return res.status(400).json({ error: "Faltan campos obligatorios (type, body)" });
        }
        const newTemplate = yield templateEmail_service_1.default.createTemplate(type, body);
        res.status(201).json(newTemplate);
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear el template" });
    }
});
exports.createTemplate = createTemplate;
// Actualizar template
const updateTemplate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { type, body } = req.body;
        const updatedTemplate = yield templateEmail_service_1.default.updateTemplate(id, type, body);
        res.status(200).json(updatedTemplate);
    }
    catch (error) {
        if (error.message === "Template not found") {
            res.status(404).json({ error: "Template no encontrado" });
        }
        else {
            res.status(500).json({ error: "Error al actualizar el template" });
        }
    }
});
exports.updateTemplate = updateTemplate;
// Eliminar template
const deleteTemplate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedTemplate = yield templateEmail_service_1.default.deleteTemplate(id);
        res.status(200).json(deletedTemplate);
    }
    catch (error) {
        if (error.message === "Template not found") {
            res.status(404).json({ error: "Template no encontrado" });
        }
        else {
            res.status(500).json({ error: "Error al eliminar el template" });
        }
    }
});
exports.deleteTemplate = deleteTemplate;
// Exportar todos los métodos como objeto (opcional)
exports.default = {
    getAllTemplates: exports.getAllTemplates,
    getTemplateByType: exports.getTemplateByType,
    createTemplate: exports.createTemplate,
    updateTemplate: exports.updateTemplate,
    deleteTemplate: exports.deleteTemplate,
};
