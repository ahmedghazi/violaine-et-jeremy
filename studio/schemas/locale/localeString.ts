import supportedLanguages from './supportedLanguages'
import {defineType} from 'sanity'

export default defineType({
  name: 'localeString',
  title: 'Locale String',
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
      type: 'string',
      fieldset: lang.isDefault ? null : 'translations',
    })
  }),
})
