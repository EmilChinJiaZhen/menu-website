"use client";
import { useState } from "react";

export function KitchenList({ carts }: { carts: any[] }) {
  const [loadingItem, setLoadingItem] = useState<string | null>(null);
  const [loadingCart, setLoadingCart] = useState<string | null>(null);

  async function handleDeleteItem(cartId: string, itemId: string) {
    setLoadingItem(itemId);
    try {
      const res = await fetch("/api/cart/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId, itemId }),
      });

      const data = await res.json();
      if (data.success) {
        window.location.reload();
      } else {
        alert("Error deleting item: " + data.error);
      }
    } finally {
      setLoadingItem(null);
    }
  }

  async function handleCheckout(cartId: string) {
    setLoadingCart(cartId);
    try {
      const res = await fetch("/api/cart/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId }),
      });

      const data = await res.json();
      if (data.success) {
        window.location.reload();
      } else {
        alert("Error checking out cart: " + data.error);
      }
    } finally {
      setLoadingCart(null);
    }
  }

  return (
    <div className="space-y-6 bg-pink-400 rounded-lg">
      {carts.map((cart) => (
        <div key={cart.id} className="border rounded-lg p-4">
          {/* <p><strong>Total:</strong> RM {cart.total ?? 0}</p> */}
          <p><strong>Status:</strong> {cart.status}</p>

          <h2 className="mt-2 font-semibold">Items:</h2>
          <ul className="list-disc pl-6">
            {(cart.items ?? []).map((item: any) => (
              <li key={item.id} className="mb-2">
                <div className="flex items-center gap-4">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <div>
                    <p><strong>{item.name}</strong></p>
                    {/* <p>Price: RM {item.price}</p> */}
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteItem(cart.id, item.id)}
                    disabled={loadingItem === item.id}
                    className="ml-auto bg-green-400 text-white px-2 py-1 rounded hover:bg-red-800 transition disabled:opacity-50"
                  >
                    {loadingItem === item.id ? "Removing..." : "Serve"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
