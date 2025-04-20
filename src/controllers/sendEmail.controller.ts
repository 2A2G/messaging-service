import { sendEmail } from "../services/sendEmail.service";
import { Request, Response, RequestHandler } from 'express';


export const welcome: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const { to, subject, message } = req.body;

    if (!to || !subject || !message) {
      res.status(400).json({ error: "Faltan campos requeridos" });
      return;
    }
    
    await sendEmail({
      to,
      subject,
      html: `<p>${message}</p>`,
    });

    res.status(200).json({ message: "Email enviado exitosamente" });
  } catch (error: any) {
    console.error("Error al enviar el correo:", error);
    res
      .status(500)
      .json({ message: "Error al enviar el correo", error: error.message });
  }
};
