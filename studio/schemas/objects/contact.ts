import {FiImage} from 'react-icons/fi'
import {defineField} from 'sanity'

export default defineField({
  name: 'contact',
  title: 'Contact',
  type: 'object',
  icon: FiImage,

  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'label',
    }),
    defineField({
      name: 'value',
      type: 'string',
      title: 'value',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'url',
    }),
  ],
})
