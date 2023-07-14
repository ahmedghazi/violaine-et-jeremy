// import {BiDockTop, BiDockBottom} from 'react-icons/bi'
// import {ControlsIcon} from '@sanity/icons'
import {ListItemBuilder, StructureResolver} from 'sanity/desk'

// If you add document types to desk structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    'media.tag',
    'settings',
    'home',
    'infos',
    'pageModulaire',
    'work',
    'project',
    'space',
    'tag',
  ].includes(id)
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .schemaType('settings')
        .child(S.editor().title('Settings').schemaType('settings').documentId('settings')),
      S.divider(),

      S.listItem()
        .title('Home')
        .schemaType('home')
        .child(S.editor().title('Home').schemaType('home').documentId('home')),

      S.listItem()
        .title('Infos')
        .schemaType('infos')
        .child(S.editor().title('Infos').schemaType('infos').documentId('infos')),

      S.listItem().title('Works').schemaType('work').child(S.documentTypeList('work')),

      S.listItem()
        .title('Pages')
        .schemaType('pageModulaire')
        .child(S.documentTypeList('pageModulaire')),

      S.divider(),

      S.listItem().title('Project').schemaType('project').child(S.documentTypeList('project')),
      S.listItem().title('Space').schemaType('space').child(S.documentTypeList('space')),
      // S.listItem().title('Tag').schemaType('tag').child(S.documentTypeList('tag')),

      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
