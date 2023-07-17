import {defineArrayMember, defineField} from 'sanity'

export const workcontent = [
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
    name: 'colorPalette',
    type: 'array',
    of: [{type: 'color', name: 'color'}],
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
          {
            type: 'space',
          },
        ],
      },
    ],
    group: 'editorial',
  }),
]