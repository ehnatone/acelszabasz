import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) throw new Error("Missing Resend API Key!");

const resend = new Resend(RESEND_API_KEY);
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET;

async function verifyTurnstile(token: string): Promise<boolean> {
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: TURNSTILE_SECRET,
      response: token,
    }),
  });

  const data = await response.json();
  return data.success;
}

export async function POST(req: Request) {
  try {
    const { name, email, telefon, message,  token } = await req.json();

    if (!name || !(email || telefon) || !message || !token) {
      return NextResponse.json({ error: "Minden mezőt ki kell tölteni!" }, { status: 400 });
    }

    const isValidCaptcha = await verifyTurnstile(token);
    if (!isValidCaptcha) {
      return NextResponse.json({ error: "CAPTCHA érvénytelen!" }, { status: 403 });
    }

    const emailResponse = await resend.emails.send({
        from: "noreply@mail.acelszabasz.hu", // Must match your verified Resend domain
        to: ["info@acelszabasz.hu"], // Replace with your email
        subject: `AcélSzabász.hu - Új ügyfél üzenet: ${name}`,
        text: `Ügyfél Név: ${name}\nÜgyfél Email: ${email}\nÜgyfél Telefonszám: ${telefon}\n\nÜzenet: ${message}`,
    });

    if (emailResponse.error) throw new Error(emailResponse.error.message);

    return NextResponse.json({ success: "Üzenet elküldve!" }, { status: 200 });
  } catch (error) {
    console.error("Hiba az email küldésnél:", error);
    return NextResponse.json({ error: "Hiba történt az üzenet küldése közben." }, { status: 500 });
  }
}