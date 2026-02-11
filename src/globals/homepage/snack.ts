import { Field } from "payload";

export const snackfields: Field = {
  type: 'group',
  name: 'snackSection',
  label: 'Snack Section',
  fields: [
    {
      name: 'snackTitle',
      label: 'Snack Title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'snackSubtitle',
      label: 'Snack Subtitle',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'snacks',
      label: 'Snacks',
      type: 'array',
      labels: {
        singular: 'Snack',
        plural: 'Snacks',
      },
      fields: [
        {
          name: 'snackPicture',
          label: 'Snack Picture',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'snackName',
          label: 'Snack Name',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'snackPrice',
          label: 'Snack Price',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
}