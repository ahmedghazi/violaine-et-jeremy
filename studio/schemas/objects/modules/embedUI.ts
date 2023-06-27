import {defineField} from 'sanity'
import {ImEmbed} from 'react-icons/im'

export default defineField({
  name: 'embedUI',
  title: 'Embed',
  type: 'object',
  icon: ImEmbed,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title',
    }),
    defineField({
      name: 'video',
      type: 'video',
    }),
    defineField({
      type: 'number',
      name: 'width',
      title: 'width',
      description: 'in percentage (default 100)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Embed',
      }
    },
  },
})
