import {defineField} from 'sanity'

export default defineField({
  title: 'Logos Accronyme',
  name: 'logos',
  type: 'object',
  preview: {
    select: {
      media: `items.0`,
    },
  },
  fields: [
    defineField({
      name: 'items',
      title: 'items',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    }),
  ],
})
