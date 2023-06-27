import {defineField, defineType} from 'sanity'
import {InfoOutlineIcon} from '@sanity/icons'

export default defineType({
  name: 'infos',
  title: 'Infos',
  type: 'document',
  icon: InfoOutlineIcon,
  validation: (Rule) =>
    Rule.custom((fields) => {
      return fields?.seo ? true : 'SEO needed'
    }),
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'editorial',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'URL based on the title (no space, or char other than a-z-0-9',
      options: {
        source: `title`,
        maxLength: 96,
      },
      group: 'editorial',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContent',
      group: 'editorial',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'editorial',
    }),
  ],
  preview: {
    select: {
      title: `title`,
    },
    prepare(selection) {
      const {title} = selection
      // console.log(images)
      return {
        title: title,
      }
    },
  },
})
