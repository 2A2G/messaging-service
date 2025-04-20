import { Request, Response } from "express";
import templateEmailService from "../services/templateEmail.service";

// Obtener todos los templates
export const getAllTemplates = async (req: Request, res: Response) => {
  try {
    const templates = await templateEmailService.getAllTemplates();
    res.status(200).json(templates);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los templates" });
  }
};

// Obtener template por tipo
export const getTemplateByType = async (req: Request, res: Response) => {
  try {
    const { type } = req.params;
    const template = await templateEmailService.getTemplateByType(type);

    if (!template) {
      return res.status(404).json({ error: "Template no encontrado" });
    }

    res.status(200).json(template);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar el template" });
  }
};

// Crear un nuevo template
export const createTemplate = async (req: Request, res: Response) => {
  try {
    const { type, body } = req.body;

    if (!type || !body) {
      return res.status(400).json({ error: "Faltan campos obligatorios (type, body)" });
    }

    const newTemplate = await templateEmailService.createTemplate(type, body);
    res.status(201).json(newTemplate);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el template" });
  }
};

// Actualizar template
export const updateTemplate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { type, body } = req.body;

    const updatedTemplate = await templateEmailService.updateTemplate(id, type, body);
    res.status(200).json(updatedTemplate);
  } catch (error: any) {
    if (error.message === "Template not found") {
      res.status(404).json({ error: "Template no encontrado" });
    } else {
      res.status(500).json({ error: "Error al actualizar el template" });
    }
  }
};

// Eliminar template
export const deleteTemplate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedTemplate = await templateEmailService.deleteTemplate(id);
    res.status(200).json(deletedTemplate);
  } catch (error: any) {
    if (error.message === "Template not found") {
      res.status(404).json({ error: "Template no encontrado" });
    } else {
      res.status(500).json({ error: "Error al eliminar el template" });
    }
  }
};

// Exportar todos los métodos como objeto (opcional)
export default {
  getAllTemplates,
  getTemplateByType,
  createTemplate,
  updateTemplate,
  deleteTemplate,
};