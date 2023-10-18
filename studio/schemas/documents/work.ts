import {defineField, defineType} from 'sanity'
import {FiList} from 'react-icons/fi'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  icon: FiList,
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
      name: 'worksImages',
      title: 'works images',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}, {type: 'space'}]}],
      group: 'editorial',
    }),
    defineField({
      name: 'worksTexts',
      title: 'works texts',
      type: 'array',
      of: [{type: 'worksTextsItem'}],
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
