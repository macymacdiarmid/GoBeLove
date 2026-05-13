import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Verifies the Shopify webhook HMAC signature
function verifyShopifyWebhook(body: string, hmacHeader: string): boolean {
  const secret = process.env.SHOPIFY_WEBHOOK_SECRET;
  if (!secret) return false;

  const digest = crypto
    .createHmac("sha256", secret)
    .update(body, "utf8")
    .digest("base64");

  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(hmacHeader));
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const hmacHeader = request.headers.get("x-shopify-hmac-sha256") ?? "";
  const topic = request.headers.get("x-shopify-topic") ?? "";

  if (!verifyShopifyWebhook(rawBody, hmacHeader)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = JSON.parse(rawBody);

  switch (topic) {
    case "orders/create":
      // TODO: sync new Shopify order to Supabase orders table
      console.log("Shopify order created:", payload.id);
      break;

    case "orders/updated":
      // TODO: update order status in Supabase
      console.log("Shopify order updated:", payload.id, payload.financial_status);
      break;

    case "products/create":
    case "products/update":
      // TODO: sync product data to Supabase products table
      console.log("Shopify product sync:", payload.id);
      break;

    default:
      console.log("Unhandled Shopify webhook topic:", topic);
  }

  return NextResponse.json({ received: true });
}
