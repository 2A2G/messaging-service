import { prisma } from "../config/prisma";

class TemplateEmailService {
  async getAllTemplates() {
    return await prisma.templateEmail.findMany();
  }

  async getTemplateByType(type: string) {
    return await prisma.templateEmail.findFirst({ where: { type } });
  }

  async createTemplate(type: string, body: string) {
    return await prisma.templateEmail.create({ data: { type, body } });
  }

  async updateTemplate(id: string, type: string, body: string) {
    const template = await prisma.templateEmail.findUnique({ where: { id } });

    if (!template) {
      throw new Error("Template not found");
    }

    return await prisma.templateEmail.update({
      where: { id },
      data: { type, body },
    });
  }

  async deleteTemplate(id: string) {
    const template = await prisma.templateEmail.findUnique({ where: { id } });

    if (!template) {
      throw new Error("Template not found");
    }

    return await prisma.templateEmail.delete({ where: { id } });
  }
}

export default new TemplateEmailService();
