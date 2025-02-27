import transporter from "../config/nodemailerConfig.js";

export const sendEmail = async ({ to, subject, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"Messaging Service" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html,
    });

    // console.log("Correo enviado:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error en el envío de correo:", error);
    throw new Error("No se pudo enviar el correo");
  }
};
