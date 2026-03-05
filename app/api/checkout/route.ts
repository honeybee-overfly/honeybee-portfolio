import Stripe from "stripe"
import { NextResponse } from "next/server"

// ★シークレットキーをenv.localから読み込む
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const { title, price } = await req.json()

  // ★Stripeの決済セッションを作成
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "jpy",
          product_data: { name: title },
          unit_amount: price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/`,
  })

  return NextResponse.json({ url: session.url })
}