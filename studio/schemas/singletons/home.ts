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
      of: [{type: 'reference', to: [{type: 'project'}]}],
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
