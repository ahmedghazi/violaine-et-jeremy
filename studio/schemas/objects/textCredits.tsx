import {defineArrayMember, defineField} from 'sanity'

export default defineField({
  title: 'Text Credits',
  name: 'textCredits',
  type: 'object',
  preview: {
    select: {
      title: `items.0.label`,
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Text Credits',
      }
    },
  },
  fields: [
    defineField({
      name: 'items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'contact',
          name: 'contact',
        }),
      ],
    }),
  ],
})
