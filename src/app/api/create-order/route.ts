import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id:     process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const order = await razorpay.orders.create({
      amount:   20000, // RS 200 in paise (1 INR = 100 paise)
      currency: "INR",
      receipt:  `au_${Date.now()}`,
      notes: {
        name:         body.name        ?? "",
        email:        body.email       ?? "",
        contact:      body.contact     ?? "",
        registeredBy: body.registeredBy ?? "",
      },
    });

    return NextResponse.json({
      orderId:  order.id,
      amount:   order.amount,
      currency: order.currency,
    });
  } catch (err) {
    console.error("[create-order]", err);
    return NextResponse.json(
      { error: "Failed to create payment order. Please try again." },
      { status: 500 }
    );
  }
}
