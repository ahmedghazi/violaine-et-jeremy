import supportedLanguages from './supportedLanguages'
import {defineType} from 'sanity'

export default defineType({
  name: 'localeBlockContent',
  title: 'Locale Block Content',
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
      type: 'blockContent',
      fieldset: lang.isDefault ? null : 'translations',
    })
  }),
})
