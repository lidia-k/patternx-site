import { z } from "zod";
import { sendMail } from "@/utils/email-helper";
import Mail from "nodemailer/lib/mailer";
import { render } from "@react-email/components";
import ConsultationEmail from "@/emails/consultation-email";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  company: z.string().min(1, { message: "Company is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters" }),
  problems: z
    .string()
    .min(10, { message: "Problems must be at least 10 characters" }),
});

export async function POST(request: Request) {
  const res = await request.json();

  const result = schema.safeParse(res);
  if (!result.success) {
    return Response.json(
      { message: "Invalid request", errors: result.error.format() },
      { status: 400 }
    );
  }

  try {
    await sendMail(<Mail.Options>{
      to: result.data.email,
      subject: "Hello",
      html: render(ConsultationEmail(result.data)),
    });
  } catch (error) {
    console.log(error)
    return Response.json({ message: String(error) }, { status: 500 });
  }

  return Response.json({ message: "Success" });
}
