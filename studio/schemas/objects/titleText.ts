import {defineField} from 'sanity'
import {FiAlignLeft} from 'react-icons/fi'

export default defineField({
  name: 'titleText',
  title: 'titleText',
  type: 'object',
  icon: FiAlignLeft,

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
    }),
  ],
})
