import {CogIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'

const TITLE = 'Settings'
// interface ProductOptions {
//   title: string
// }

export default defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  groups: [
    // {
    //   default: true,
    //   name: 'navigation',
    //   title: 'Navigation',
    // },
    {
      default: true,
      name: 'seo',
      title: 'Default SEO',
    },
    {
      name: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
    {
      name: 'misc',
      title: 'Misc',
    },
    {
      name: 'shop',
      title: 'Shop',
    },
  ],
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),

    defineField({
      name: 'navWorks',
      title: 'Navworks (works, design)',
      type: 'array',
      of: [
        {
          type: 'linkInternal',
        },
      ],
      group: 'header',
    }),
    defineField({
      name: 'navStudio',
      title: 'Nav studio (foundry, infos)',
      type: 'array',
      of: [
        {
          type: 'linkInternal',
        },
        {
          type: 'linkExternal',
        },
      ],
      group: 'header',
    }),

    defineField({
      name: 'links',
      title: 'Footer Links',
      type: 'array',
      of: [{type: 'titleText'}],
      group: 'footer',
    }),
    defineField({
      name: 'linkLegals',
      title: 'Link legals',
      type: 'reference',
      to: [{type: 'pageModulaire'}],
      group: 'footer',
    }),
    // defineField({
    //   name: 'logos',
    //   title: 'Logos glyphs',
    //   type: 'array',
    //   of: [{type: 'image'}],
    //   options: {
    //     layout: 'grid',
    //   },
    //   group: 'footer',
    // }),
    defineField({
      name: 'logos',
      type: 'array',
      of: [{type: 'logos'}],
      group: 'footer',
    }),

    defineField({
      name: 'message404',
      title: 'Message 404',
      group: 'misc',
      type: 'blockContent',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
