export const dynamic = "force-dynamic";

import { getPayload } from "payload";
import config from "@payload-config";
import Link from "next/link";
import { KitchenList } from "./kitchenlist";

export default async function KitchenPage() {
  const payload = await getPayload({ config });

  const carts = await payload.find({
    collection: "carts",
    depth: 2,
    where: { status: { equals: "checked_out" } },
  });

  return (
    <div className="p-6">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold mb-4">🍳Kitchen</h2>
        <Link href="/homepage">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
            🏠 Home
          </button>
        </Link>
      </div>
      {carts.docs.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <KitchenList carts={carts.docs} />
      )}
    </div>
  );
}
