import {defineField, defineType} from 'sanity'
import {ThListIcon} from '@sanity/icons'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  icon: ThListIcon,
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
      type: 'string',
      title: 'Title',
      group: 'editorial',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL based on the title (no space, or char other than a-z-0-9',
      options: {
        source: `title`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'editorial',
    }),
    defineField({
      name: 'works',
      title: 'works featured',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}, {type: 'space'}]}],
      group: 'editorial',
    }),
  ],
  preview: {
    select: {
      title: `title`,
      slug: 'slug',
    },
    prepare(selection) {
      const {title, slug} = selection
      return {
        title: title,
        subtitle: `/${slug.current}`,
      }
    },
  },
})
