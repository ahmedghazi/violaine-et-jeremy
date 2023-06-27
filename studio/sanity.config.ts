import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
// import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {structure} from './src/deskStructure'

// import {resolveProductionUrl} from './src/actions/resolveProductionUrl'
// import {helloWord} from './src/actions/helloWorld'

import {
  dashboardTool,
  // sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard'
import {media} from 'sanity-plugin-media'

// const devOnlyPlugins = [getStartedPlugin()]

const plugins = [
  deskTool({
    structure: structure,
  }),
  dashboardTool({widgets: [projectInfoWidget(), projectUsersWidget()]}),
  media(),
  visionTool(),
]

export default defineConfig({
  name: 'production',
  title: 'Violaine & Jérémy',

  projectId: '60kmv55h',
  dataset: 'production',

  plugins: plugins,

  schema: {
    types: schemaTypes,
  },
})
