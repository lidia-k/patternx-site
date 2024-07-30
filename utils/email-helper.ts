import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPConnection from "nodemailer/lib/smtp-connection";

export const sendMail = async (data: Mail.Options) => {
  const transporter = nodemailer.createTransport(<SMTPConnection.Options>{
    host: String(process.env.SMTP_HOST),
    port: Number(process.env.SMTP_PORT),
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: String(process.env.SMTP_USER),
      pass: String(process.env.SMTP_PASSWORD),
    },
  });

  return await transporter.sendMail({
    from: process.env.SMTP_FROM,
    ...data,
  });
};
