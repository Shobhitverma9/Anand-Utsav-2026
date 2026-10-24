import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";

function getRazorpay() {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  if (!key_id || !key_secret) {
    throw new Error("Razorpay credentials (RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET) are missing.");
  }

  return new Razorpay({ key_id, key_secret });
}

export async function POST(req: NextRequest) {
  try {
    const razorpay = getRazorpay();
    const body = await req.json();

    const order = await razorpay.orders.create({
      amount:   100, // RS 200 in paise (1 INR = 100 paise)
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
  } catch (err: unknown) {
    console.error("[create-order]", err);
    const errorMessage = err instanceof Error ? err.message : "Failed to create payment order.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
