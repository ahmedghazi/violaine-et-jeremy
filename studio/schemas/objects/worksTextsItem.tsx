import {defineField} from 'sanity'
import {RxBorderDashed} from 'react-icons/rx'

export default defineField({
  name: 'worksTextsItem',
  title: 'Works Texts Item',
  type: 'object',
  icon: RxBorderDashed,

  fields: [
    defineField({
      name: 'hasLink',
      type: 'boolean',
      title: 'Has Link ?',
    }),
    defineField({
      name: 'work',
      type: 'reference',
      to: [{type: 'project'}, {type: 'space'}],
    }),
  ],
  preview: {
    select: {
      title: 'work.title',
      media: 'work.imageCover',
    },
  },
})
