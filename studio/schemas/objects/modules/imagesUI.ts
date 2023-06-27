import {defineField} from 'sanity'
import {FiImage} from 'react-icons/fi'

export default defineField({
  name: 'imagesUI',
  title: 'Images',
  type: 'object',
  icon: FiImage,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Module title (displayed only in the admin)',
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'imageUI',
        },
      ],
    }),
    defineField({
      type: 'number',
      name: 'idth',
      title: 'width',
      description: 'in percentage',
    }),
    defineField({
      name: 'caption',
      type: 'text',
      title: 'Image caption',
    }),
  ],

  preview: {
    select: {
      image: 'image',
      title: 'title',
    },
    prepare(selection) {
      const {title, image} = selection
      return {
        title: title,
        subtitle: 'Image',
        media: image,
      }
    },
  },
})
