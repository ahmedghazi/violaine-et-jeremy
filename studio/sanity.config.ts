import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
// import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {structure} from './src/deskStructure'
import {colorInput} from '@sanity/color-input'

// import {resolveProductionUrl} from './src/actions/resolveProductionUrl'
// import {helloWord} from './src/actions/helloWorld'

import {
  dashboardTool,
  // sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard'
import {media} from 'sanity-plugin-media'
import {resolveProductionUrl} from './src/actions/resolveProductionUrl'

// const devOnlyPlugins = [getStartedPlugin()]

const plugins = [
  deskTool({
    structure: structure,
  }),
  dashboardTool({widgets: [projectInfoWidget(), projectUsersWidget()]}),
  media(),
  visionTool(),
  colorInput(),
]

export default defineConfig({
  name: 'production',
  title: 'Violaine & Jérémy',

  projectId: '60kmv55h',
  dataset: 'production',

  plugins: plugins,
  document: {
    // productionUrl: resolveProductionUrl,
    actions: [resolveProductionUrl],
  },
  schema: {
    types: schemaTypes,
  },
})
