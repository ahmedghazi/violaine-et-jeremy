import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'
// import modulesList from '../objects/modules/modulesList'
// console.log(modulesList)

export default defineType({
  name: 'home',
  type: 'document',
  title: 'Home',
  icon: HomeIcon,
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
      name: 'video',
      type: 'video',
      group: 'editorial',
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
      group: 'editorial',
    }),
    defineField({
      name: 'projects',
      title: 'Projects featured',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}, {type: 'space'}]}],
      group: 'editorial',
    }),
  ],
  preview: {
    prepare() {
      return {
        subtitle: '/',
        title: 'Home',
      }
    },
  },
})
