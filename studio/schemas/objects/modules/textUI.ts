import {defineField} from 'sanity'
import {FiAlignLeft} from 'react-icons/fi'

export default defineField({
  name: 'textUI',
  title: 'Text',
  type: 'object',
  icon: FiAlignLeft,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Module title (displayed only in the admin)',
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
      title: 'Text',
    }),
    defineField({
      name: 'align',
      type: 'string',
      description: 'Alignement vertical',
      options: {
        list: [
          {title: 'Default', value: 'start'},
          {title: 'Center', value: 'center'},
          {title: 'Bottom', value: 'end'},
        ],
      },
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
        subtitle: 'Text',
      }
    },
  },
})
