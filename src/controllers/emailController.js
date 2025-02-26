import { sendEmail } from "../services/emailService.js";

export const sendTestEmail = async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    await sendEmail({
      to,
      subject,
      html: `<p>${message}</p>`,
    });

    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al enviar el correo", error });
  }
};
