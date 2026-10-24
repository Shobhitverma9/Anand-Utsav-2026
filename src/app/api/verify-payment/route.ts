import crypto                   from "crypto";
import { google }               from "googleapis";
import { NextRequest, NextResponse } from "next/server";

/* ── Google Sheets helper ──────────────────────────────────── */
async function appendToSheet(row: string[]) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key:  (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  /* Auto-add header row if A1 is empty */
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range:         "Sheet1!A1",
  });

  if (!existing.data.values?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId:   process.env.GOOGLE_SHEET_ID!,
      range:           "Sheet1!A1:H1",
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          "Timestamp", "Name", "Email", "Contact",
          "Registered By", "Payment ID", "Order ID", "Amount Paid",
        ]],
      },
    });
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId:   process.env.GOOGLE_SHEET_ID!,
    range:           "Sheet1!A:H",
    valueInputOption: "RAW",
    requestBody: { values: [row] },
  });
}

/* ── Route handler ─────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      email,
      contact,
      registeredBy,
    } = await req.json();

    /* 1. Verify Razorpay signature */
    const expectedSig = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSig !== razorpay_signature) {
      return NextResponse.json(
        { error: "Payment verification failed. Signature mismatch." },
        { status: 400 }
      );
    }

    /* 2. Append verified registration to Google Sheet */
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone:   "Asia/Kolkata",
      dateStyle:  "medium",
      timeStyle:  "short",
    });

    try {
      await appendToSheet([
        timestamp,
        name,
        email,
        contact,
        registeredBy || "—",
        razorpay_payment_id,
        razorpay_order_id,
        "₹200",
      ]);
    } catch (sheetErr) {
      /* Sheet save failed but payment succeeded — log and continue */
      console.error("[verify-payment] Google Sheets error:", sheetErr);
    }

    return NextResponse.json({ success: true, paymentId: razorpay_payment_id });
  } catch (err) {
    console.error("[verify-payment]", err);
    return NextResponse.json(
      { error: "Server error during verification." },
      { status: 500 }
    );
  }
}
