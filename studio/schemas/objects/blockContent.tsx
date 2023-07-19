import {defineType, defineArrayMember} from 'sanity'
import {FiAlignCenter, FiAlignLeft, FiAlignRight, FiExternalLink, FiLink} from 'react-icons/fi'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

const Normal = (props: any) => <span style={{fontFamily: 'serif'}}>{props.children}</span>
const Sans = (props: any) => <span style={{fontFamily: 'sans-serif'}}>{props.children}</span>
const AlignLeftRender = (props: any) => <p style={{textAlign: 'left'}}>{props.children}</p>
const AlignCenterRender = (props: any) => <p style={{textAlign: 'center'}}>{props.children}</p>
const AlignRightRender = (props: any) => <p style={{textAlign: 'right'}}>{props.children}</p>

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal', component: Normal},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        // {title: 'Quote', value: 'blockquote'},
        {title: 'Texte L', value: 'text_lg'},
        // { title: 'Texte XL', value: 'text_xl' },
        // {title: 'Sans', value: 'sans'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Diatype Sans', value: 'sans', component: Sans, icon: () => 'Diatype Sans'},
          {title: 'GT Alpina', value: 'gt-alpina', component: Sans, icon: () => 'GT Alpina'},
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {
            title: 'Align Left',
            value: 'align_left',
            icon: FiAlignLeft,
            component: AlignLeftRender,
          },
          {
            title: 'Align Center',
            value: 'align_center',
            icon: FiAlignCenter,
            component: AlignCenterRender,
          },
          {
            title: 'Align Right',
            value: 'align_right',
            icon: FiAlignRight,
            component: AlignRightRender,
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Internal link',
            name: 'linkInternal',
            type: 'object',
            icon: FiLink,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                weak: true,
                title: 'Reference',
                to: [{type: 'project'}],
              },
            ],
          },
          {
            title: 'External link',
            name: 'linkExternal',
            type: 'object',
            icon: FiExternalLink,
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'string',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'textIcon',
      description: 'petite icone comme la coccinelle',
      // options: {hotspot: true},
    }),
    defineArrayMember({
      type: 'image',
      name: 'image',
      options: {hotspot: true},
    }),

    defineArrayMember({
      type: 'embed',
    }),
  ],
})
