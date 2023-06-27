import {defineField} from 'sanity'

export default defineField({
  name: 'compositionItemImage',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Module title',
    }),
    // defineField({
    //   name: 'size',
    //   type: 'string',
    //   options: {
    //     list: [
    //       {title: 'Quarter', value: 'quarter'},
    //       {title: 'Third', value: 'third'},
    //       {title: 'half', value: 'half'},
    //       {title: 'full', value: 'full'},
    //     ],
    //   },
    //   // invitialValue: 'full',
    // }),
    defineField({
      name: 'gridSize',
      type: 'string',
      initialValue: 'full',
      options: {
        list: [
          {title: 'Quarter page', value: 'quarter'},
          {title: 'Third page', value: 'third'},
          {title: 'Half page', value: 'half'},
          {title: 'Full page', value: 'full'},
        ],
      },
    }),
    defineField({
      name: 'gridArea',
      type: 'string',
      options: {
        list: [
          {title: 'third-left', value: '1/1/2/2'},
          {title: 'third-center', value: '1/2/2/3'},
          {title: 'third-right', value: '1/3/2/4'},
          {title: 'quarter-top-left', value: '1/1/2/2'},
          {title: 'quarter-bottom-left', value: '2/1/3/2'},
          {title: 'quarter-top-right', value: '1/2/2/2'},
          {title: 'quarter-bottom-right', value: '2/2/2/2'},
          {title: 'half-left', value: '1/1/3/2'},
          {title: 'half-right', value: '1/2/3/2'},
        ],
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
  ],
  preview: {
    select: {
      subtitle: `gridSize`,
      media: 'image',
    },
    prepare(selection) {
      const {subtitle} = selection
      return {
        title: 'Image',
        subtitle: subtitle,
      }
    },
  },
})
