import type { CollectionConfig } from "payload";

export const Cart: CollectionConfig = {
  slug: "carts",
  admin: {
    useAsTitle: "id",
  },
  auth: false,
  fields: [
    {
      name: "items",
      type: "array",
      required: false,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "price",
          type: "number",
          required: true,
        },
        {
          name: "imageUrl",
          type: "text",
        },
        {
          name: "quantity",
          type: "number",
          required: true,
          defaultValue: 1,
        },
      ],
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Active", value: "active" },
        { label: "Checked Out", value: "checked_out" },
      ],
      defaultValue: "active",
    },
    {
      name: "total",
      type: "number",
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (data?.items) {
              data.total = data.items.reduce(
                (sum: number, item: any) => sum + (item.price || 0) * (item.quantity || 0),
                0
              );
            }
          },
        ],
      },
    },
  ],
};
