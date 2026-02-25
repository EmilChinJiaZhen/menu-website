import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

export async function POST(req: Request) {
  try {
    const { cartId } = await req.json();
    const payload = await getPayload({ config });

    const updatedCart = await payload.update({
      collection: "carts",
      id: cartId,
      data: { status: "checked_out" },
    });

    return NextResponse.json({ success: true, cart: updatedCart });
  } catch (err: any) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
