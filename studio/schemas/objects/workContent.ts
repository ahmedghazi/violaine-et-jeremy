import {defineArrayMember, defineField} from 'sanity'

export const workcontent = [
  defineField({
    name: 'seo',
    type: 'seo',
    group: 'seo',
  }),
  defineField({
    name: 'isArchive',
    type: 'boolean',
    title: 'Is Archive (ce projet as-t-il une url publique?)',
    group: 'editorial',
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
    name: 'imageHomeMobile',
    type: 'image',
    title: 'Image home mobile',
    description: 'visible on home page',
    group: 'editorial',
  }),
  defineField({
    name: 'imageCover',
    type: 'image',
    title: 'Image Cover',
    description: 'visible on works image',
    group: 'editorial',
  }),
  defineField({
    name: 'colorPalette',
    type: 'array',
    of: [{type: 'color', name: 'color'}],
    group: 'editorial',
    description: 'First for background, second for text, leftover for color palette',
  }),
  defineField({
    name: 'imageIntro',
    type: 'image',
    title: 'Image Intro',
    description: 'visible on project page next to text intro',
    group: 'editorial',
  }),
  defineField({
    name: 'text',
    title: 'Text',
    type: 'blockContent',
    group: 'editorial',
  }),
  defineField({
    name: 'introCredits',
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
    name: 'textIntroDrapeau',
    type: 'boolean',
    group: 'editorial',
    description: 'default false',
  }),
  defineField({
    name: 'look',
    type: 'string',
    description: 'Page look, default or double scroll with sticky text',
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
    type: 'string',
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
    name: 'imagesLength',
    type: 'number',
    description: "Nombre d'images à afficher dans works/texte",
    group: 'editorial',
  }),
  defineField({
    name: 'content',
    description: 'modular content zone (image, images, text)',
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
    title: 'Work related',
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
