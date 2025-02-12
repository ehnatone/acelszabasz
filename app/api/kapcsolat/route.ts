import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Minden mezőt ki kell tölteni!" }, { status: 400 });
    }

    const emailResponse = await resend.emails.send({
      from: "noreply@mail.acelszabasz.hu", // Must match your verified Resend domain
      to: ["info@acelszabasz.hu"], // Replace with your email
      subject: `AcélSzabász.hu - Új ügyfél üzenet: ${name}`,
      text: `Email: ${email}\nÜzenet: ${message}`,
    });

    if (emailResponse.error) throw new Error(emailResponse.error.message);

    return NextResponse.json({ success: "Üzenet elküldve!" }, { status: 200 });
  } catch (error) {
    console.error("Hiba az email küldésnél:", error);
    return NextResponse.json({ error: "Hiba történt az üzenet küldése közben." }, { status: 500 });
  }
}