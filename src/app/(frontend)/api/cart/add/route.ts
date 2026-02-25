import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

// Helper function to add items to cart
async function addToCart(item: {
  name: string;
  price: number;
  imageUrl?: string;
}) {
  const payload = await getPayload({ config });

  // Step 1: Find active cart (no user filter)
  const carts = await payload.find({
    collection: "carts",
    where: { status: { equals: "active" } },
    showHiddenFields: true, // ensures array item _id is returned
  });

  let cart = carts.docs[0];

  if (!cart) {
    // Create new cart if none exists
    cart = await payload.create({
      collection: "carts",
      data: {
        items: [
          {
            name: item.name,
            price: item.price,
            imageUrl: item.imageUrl,
            quantity: 1,
          },
        ],
        status: "active",
      },
    });
  } else {
    const items = cart.items ?? [];

    const existingItem = items.find(
      (i: any) => i.name === item.name && i.price === item.price
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.push({
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        quantity: 1,
      });
    }

    cart = await payload.update({
      collection: "carts",
      id: cart.id,
      data: { items },
    });
  }

  return cart;
}

// API route handler
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, price, imageUrl } = body;

    const cart = await addToCart({ name, price, imageUrl });

    return NextResponse.json({ success: true, cart });
  } catch (err: any) {
    console.error("Cart add error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
