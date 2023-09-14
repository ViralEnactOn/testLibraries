import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { Email } from "../../react-email-starter/emails/newEmail";

export async function SendMail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tmdbclone@gmail.com",
      pass: "shlbakqhkfsxkwwd",
    },
  });

  const emailHtml = render(<Email url="https://example.com" />);

  const options = {
    from: "tmdbclone@gmail.com",
    to: "tmdbclone@gmail.com",
    subject: "hello world",
    html: emailHtml,
  };

  await transporter.sendMail(options);
}
