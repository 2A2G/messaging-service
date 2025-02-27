import { prisma } from "../config/prisma";

class TemplateEmailService {
  async getAllTemplates() {
    return await prisma.templateEmail.findMany();
  }

  async getTemplateByType(type: String) {
    return await prisma.templateEmail.findFirst({ where: { type } });
  }

  async createTemplate(type: string, body: string) {
    return await prisma.templateEmail.create({ data: { type, body } });
  }

  async updateTemplate(id: string, type: string, body: string) {
    return await prisma.templateEmail.update({
      where: { id },
      data: { type, body },
    });
  }

  async deleteTemplate(id: string) {
    return await prisma.templateEmail.delete({ where: { id } });
  }
}

export default new TemplateEmailService();
