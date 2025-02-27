import { sendEmail } from "../services/emailService.js";

export const sendTestEmail = async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    if (!to || !subject || !message) {
      return res
        .status(400)
        .json({ message: "Faltan parámetros en la solicitud" });
    }

    await sendEmail({
      to,
      subject,
      html: `<p>${message}</p>`,
    });

    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res
      .status(500)
      .json({ message: "Error al enviar el correo", error: error.message });
  }
};
