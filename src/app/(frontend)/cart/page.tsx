export const dynamic = "force-dynamic";

import { getPayload } from "payload";
import config from "@payload-config";
import Link from "next/link";
import { CartList } from "./cartlist";

export default async function CartPage() {
  const payload = await getPayload({ config });

  const carts = await payload.find({
    collection: "carts",
    depth: 2,
    where: { status: { equals: "active" } },
  });

  return (
    <div className="p-6">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold mb-4">🛒Cart</h2>
        <Link href="/homepage">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
            🏠 Home
          </button>
        </Link>
      </div>
      {carts.docs.length === 0 ? (
        <p>Nothing in the cart right now.</p>
      ) : (
        <CartList carts={carts.docs} />
      )}
    </div>
  );
}
