import {defineField} from 'sanity'
import {ImEmbed} from 'react-icons/im'

export default defineField({
  name: 'moduleEmbed',
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
      name: 'embed',
      type: 'embed',
    }),
    // defineField({
    //   type: 'number',
    //   name: 'width',
    //   title: 'width',
    //   description: 'Size in a 12 column grid (1/12, 2/12, ..... 12/12). cf flexboxgrid.com',
    //   initialValue: 12,
    //   validation: (Rule) => Rule.required().min(1).max(12).warning('from 1 to 12'),
    // }),
    // defineField({
    //   type: 'number',
    //   name: 'offset',
    //   title: 'Offset',
    //   description: 'Indent in a 12 column grid (1/12, 2/12, ..... 12/12). cf flexboxgrid.com',
    //   initialValue: 0,
    //   validation: (Rule) => Rule.required().min(0).max(12).warning('from 1 to 12'),
    // }),
    // defineField({
    //   name: 'caption',
    //   type: 'localeBlockContent',
    //   title: 'Image caption',
    // }),
    defineField({
      type: 'boolean',
      name: 'defaultUi',
      description: 'show vimeo default ui (for password protected videos for example)',
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
