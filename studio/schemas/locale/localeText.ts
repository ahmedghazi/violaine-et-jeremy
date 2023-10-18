import supportedLanguages from './supportedLanguages'
import {defineType} from 'sanity'

export default defineType({
  name: 'localeText',
  title: 'Locale Text',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true},
    },
  ],
  fields: supportedLanguages.map((lang) => {
    return defineType({
      title: lang.title,
      name: lang.id,
      type: 'text',
      fieldset: lang.isDefault ? null : 'translations',
    })
  }),
})
