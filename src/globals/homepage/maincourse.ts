import { Field } from "payload";

export const maincoursefields: Field = {
  type: 'group',
  name: 'maincourseSection',
  label: 'Main Course Section',
  fields: [
    {
      name: 'maincourseTitle',
      label: 'Main Course Title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'maincourseSubtitle',
      label: 'Main Course Subtitle',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'maincourses',
      label: 'Main Courses',
      type: 'array',
      labels: {
        singular: 'Main Course',
        plural: 'Main Courses',
      },
      fields: [
        {
          name: 'maincoursePicture',
          label: 'Main Course Picture',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'maincourseName',
          label: 'Main Course Name',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'maincoursePrice',
          label: 'Main Course Price',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
}