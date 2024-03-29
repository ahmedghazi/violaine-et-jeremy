import {defineField} from 'sanity'

export default defineField({
  name: 'compositionUI',
  title: 'Composition UI',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Module title',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'compositionItemImage',
        },
        {
          type: 'compositionItemText',
        },
        {
          type: 'compositionItemEmbed',
        },
      ],
    }),

    defineField({
      name: 'gutter',
      type: 'boolean',
      description: 'Gouttière?',
    }),
    defineField({
      name: 'autoHeight',
      type: 'boolean',
      description: 'default min screen height minus padding',
    }),
  ],
  preview: {
    select: {
      title: `title`,
      items: 'items',
      align: 'align',
      justify: 'justify',
    },
    prepare(selection) {
      const {title, items, align, justify} = selection
      // const compString = items.map((item: any) => (item.gridSize ? item.gridSize : '')).toString()
      const compString = items
        .map((item: any) => {
          // console.log(item)
          const gridSize = item.gridSize ? item.gridSize : ''
          const type = item._type === 'compositionItemImage' ? 'image' : 'text'
          return `${type} (${gridSize})`
        })
        .toString()
      // console.log(title, compString)
      let subtitle = `${items.length} item${items.length > 1 ? 's' : ''}`
      subtitle += items.length > 1 ? `: ${compString.replace(',', ', ')}` : `: ${compString}`

      return {
        title: title,
        subtitle: subtitle,
      }
    },
  },
})
