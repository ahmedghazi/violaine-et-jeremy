// import i18n from "../i18n";
// import localizePreview from "../localizePreview";
import {defineField, defineType} from 'sanity'
import {FiServer} from 'react-icons/fi'
import modulesList from '../objects/modules/modulesList'
// import {validateSlug} from '../../utils/validateSlug'

export default defineType({
  name: 'pageModulaire',
  type: 'document',
  title: 'Page Modulaire',
  icon: FiServer,
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
  preview: {
    select: {
      // title: `title.${baseLanguage.name}`,
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
      description: 'Le nom de la page',
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
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: modulesList,
      group: 'editorial',
    }),
  ],
})
