import {defineField} from 'sanity'

export default defineField({
  title: 'Link Internal',
  name: 'linkInternal',
  type: 'object',
  preview: {
    select: {
      label: `label`,
    },
    prepare(selection) {
      const {label} = selection
      return {
        title: label,
        // subtitle: "test",
      }
    },
  },
  fields: [
    defineField({
      name: 'label',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'reference',
      weak: true,
      to: [{type: 'work'}, {type: 'project'}, {type: 'infos'}, {type: 'home'}],
    }),
  ],
})
