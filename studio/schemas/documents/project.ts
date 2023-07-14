import {defineField, defineArrayMember, defineType} from 'sanity'
import {FolderIcon} from '@sanity/icons'
import modulesList from '../objects/modules/modulesList'
// import {baseLanguage} from '..//supportedLanguages'

export default defineType({
  type: 'document',
  name: 'project',
  title: 'Project',
  icon: FolderIcon,
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
      name: 'metas',
      title: 'Metas',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  initialValue: {
    look: 'default',
  },
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
      name: 'description',
      title: 'description',
      type: 'string',
      description: 'Short desc, visible on home page',
      group: 'editorial',
    }),
    defineField({
      name: 'imageHome',
      type: 'image',
      title: 'Image home',
      description: 'visible on home page',
      group: 'editorial',
    }),

    defineField({
      name: 'imageCover',
      type: 'image',
      title: 'Image Cover',
      description: 'visible on project page next to text',
      group: 'editorial',
    }),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContent',
      group: 'editorial',
    }),
    defineField({
      name: 'textIntroDrapeau',
      type: 'boolean',
      group: 'editorial',
      description: 'default false',
    }),
    defineField({
      name: 'look',
      type: 'string',
      group: 'editorial',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Split scroll (sticky text)', value: 'split'},
        ],
      },
    }),
    // defineField({
    //   name: 'modules',
    //   title: 'Modules',
    //   type: 'array',
    //   of: modulesList,
    //   group: 'editorial',
    // }),

    defineField({
      name: 'job',
      type: 'string',
      // description: 'visible on home page',
      group: 'metas',
    }),
    defineField({
      name: 'year',
      type: 'number',
      group: 'metas',
    }),
    defineField({
      name: 'client',
      type: 'string',
      group: 'metas',
    }),
    defineField({
      name: 'industry',
      type: 'string',
      group: 'metas',
    }),
    defineField({
      name: 'location',
      type: 'string',
      group: 'metas',
    }),

    defineField({
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'compositionUI',
        },
      ],
      group: 'editorial',
    }),

    defineField({
      name: 'credits',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'contact',
          name: 'contact',
        }),
      ],
      group: 'editorial',
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'contact',
          name: 'contact',
        }),
      ],
      group: 'editorial',
    }),

    defineField({
      name: 'related',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'project',
            },
          ],
        },
      ],
      group: 'editorial',
    }),
  ],

  preview: {
    select: {
      title: `title`,
      slug: 'slug',
      image: 'imageCover',
    },
    prepare(selection) {
      const {title, slug, image} = selection
      // console.log(images)
      return {
        title: title,
        subtitle: `/project/${slug.current}`,
        media: image,
      }
    },
  },
})
