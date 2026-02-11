import { Field } from "payload";

export const bevaragefields: Field = {
  type: 'group',
  name: 'bevarageSection',
  label: 'Bevarage Section',
  fields: [
    {
      name: 'bevarageTitle',
      label: 'Bevarage Title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'bevarageSubtitle',
      label: 'Bevarage Subtitle',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'bevarages',
      label: 'Bevarages',
      type: 'array',
      labels: {
        singular: 'Bevarage',
        plural: 'Bevarages',
      },
      fields: [
        {
          name: 'bevaragePicture',
          label: 'Bevarage Picture',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'bevarageName',
          label: 'Bevarage Name',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'bevaragePrice',
          label: 'Bevarage Price',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
}