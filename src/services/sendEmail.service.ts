import transporter from "../config/nodemailerConfig";

interface EmailOptions {
  to: string | string[];  
  subject: string;
  html: string;
}

export const sendEmail = async ({ to, subject, html }: EmailOptions) => {
  try {
    const info = await transporter.sendMail({
      from: `"Messaging Service" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html,
    });

    return info; // Retorna la información del envío
  } catch (error) {
    console.error("Error en el envío de correo:", error);
    throw new Error("No se pudo enviar el correo");
  }
};