import { transporter } from "./config/nodemailerConfig.js";

const sendEmail = async ({ to, subject, html }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  };

  // await sendMail(mailOptions);
};

export default { sendEmail };
