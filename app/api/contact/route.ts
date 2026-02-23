import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// ✅ Two recipient emails
const RECIPIENT_1 =
  process.env.EMAIL_RECIPIENT_1 || "harishsuthar739@gmail.com";
const RECIPIENT_2 = process.env.EMAIL_RECIPIENT_2 || "manishsuthar078@gmail.com";

// ✅ Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_PASS, // Gmail App Password (not your login password)
  },
});

const emailHtml = (name: string, email: string, message: string) => `
  <div style="font-family: monospace; border: 3px solid #000; padding: 24px; max-width: 600px; background: #fff;">
    <div style="background: #FFC900; border: 2px solid #000; padding: 8px 16px; display: inline-block; font-weight: 900; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 24px;">
      📬 New Contact Message
    </div>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 12px; border: 2px solid #000; background: #f4f4f0; font-weight: 700; width: 120px; text-transform: uppercase; font-size: 13px;">Name</td>
        <td style="padding: 12px; border: 2px solid #000; font-size: 15px;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border: 2px solid #000; background: #f4f4f0; font-weight: 700; text-transform: uppercase; font-size: 13px;">Email</td>
        <td style="padding: 12px; border: 2px solid #000; font-size: 15px;">
          <a href="mailto:${email}" style="color: #11A365; font-weight: 700;">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px; border: 2px solid #000; background: #f4f4f0; font-weight: 700; text-transform: uppercase; font-size: 13px;">Message</td>
        <td style="padding: 12px; border: 2px solid #000; font-size: 15px; white-space: pre-wrap;">${message}</td>
      </tr>
    </table>
    <div style="margin-top: 20px; border: 2px solid #000; padding: 10px 16px; background: #80C551; font-weight: 700; font-size: 12px; text-transform: uppercase;">
      Sent via BrutalCN Contact Form
    </div>
  </div>
`;

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const mailOptions = {
      from: `"BrutalCN" <${process.env.GMAIL_USER}>`,
      subject: `✉️ New Message from ${name} — BrutalCN`,
      html: emailHtml(name, email, message),
      replyTo: email,
    };

    // Send to both recipients independently
    const [result1, result2] = await Promise.allSettled([
      transporter.sendMail({ ...mailOptions, to: RECIPIENT_1 }),
      transporter.sendMail({ ...mailOptions, to: RECIPIENT_2 }),
    ]);

    const anySuccess =
      result1.status === "fulfilled" || result2.status === "fulfilled";

    if (!anySuccess) {
      console.error("Both email sends failed:", result1, result2);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
