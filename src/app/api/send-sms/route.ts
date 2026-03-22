import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req: NextRequest) {
  const { phone, message } = await req.json();
  if (!phone || !message) return NextResponse.json({ error: "Phone and message required" }, { status: 400 });

  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: `+91${phone}`,
    });
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}