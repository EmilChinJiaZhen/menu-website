import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

export async function DELETE(req: Request) {
  try {
    const { cartId, itemId } = await req.json();
    const payload = await getPayload({ config });

    // Use find instead of findByID
    const carts = await payload.find({
      collection: "carts",
      where: { id: { equals: cartId } },
      showHiddenFields: true, // helpful for debugging
    });

    const cart = carts.docs[0];
    if (!cart) {
      console.log("Cart not found for ID:", cartId);
      return NextResponse.json({ success: false, error: "Cart not found" }, { status: 404 });
    }

    if (!Array.isArray(cart.items)) {
      console.log("Cart has no items:", cart);
      return NextResponse.json({ success: false, error: "Cart has no items" }, { status: 400 });
    }

    console.log("Cart items IDs:", cart.items.map((i: any) => i._id));
    console.log("ItemId received:", itemId);

    // Remove the item by its unique _id
    const updatedItems = cart.items.filter((item: any) => item.id !== itemId);

    await payload.update({
      collection: "carts",
      id: cart.id,
      data: { items: updatedItems },
    });

    if (updatedItems.length === 0) {
      await payload.delete({
        collection: "carts",
        id: cart.id,
      });
      return NextResponse.json({ success: true, deletedCart: true });
    } else {
      await payload.update({
        collection: "carts",
        id: cart.id,
        data: { items: updatedItems },
      });
      return NextResponse.json({ success: true });
    }

  } catch (err: any) {
    console.error("Delete item error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
