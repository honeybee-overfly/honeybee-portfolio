import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "honeybee.overfly@gmail.com", // ← 自分のメールアドレスに変えて
    subject: `[Portfolio] Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  })

  return NextResponse.json({ success: true })
}