/* Singletons */
import settings from './singletons/settings'
import home from './singletons/home'
import infos from './singletons/infos'

/* Pages */
import project from './documents/project'
import space from './documents/space'
import tag from './documents/tag'
import work from './documents/work'
import pageModulaire from './documents/pageModulaire'

/* Objects */
import seo from './objects/seo'
import linkInternal from './objects/linkInternal'
import linkExternal from './objects/linkExternal'
import linkIcon from './objects/linkIcon'
import contact from './objects/contact'
import blockContent from './objects/blockContent'
import textIcon from './objects/textIcon'
import video from './objects/video'
import embed from './objects/embed'
import titleText from './objects/titleText'
import worksTextsItem from './objects/worksTextsItem'
import logos from './objects/logos'
// import embed from './objects/embed'
/* Localization */
// import localeString from './locale/localeString'
// import localeText from './locale/localeText'
// import localeBlockContent from './locale/localeBlockContent'

/* Modules Page builder */
import moduleText from './objects/modules/textUI'
import moduleImage from './objects/modules/imageUI'
import moduleImages from './objects/modules/imagesUI'
import moduleTextImage from './objects/modules/textImageUI'
import moduleEmbed from './objects/modules/embedUI'
import compositionItemImage from './objects/modules/compositionItemImage'
import compositionItemText from './objects/modules/compositionItemText'
import compositionItemEmbed from './objects/modules/compositionItemEmbed'
import moduleCompositionUI from './objects/modules/compositionUI'
// import moduleEmbedUI from './objects/modules/embedUI'

export const schemaTypes = [
  settings,
  home,
  infos,
  pageModulaire,
  work,
  project,
  space,
  tag,

  seo,
  linkInternal,
  linkExternal,
  linkIcon,
  blockContent,
  textIcon,
  video,
  embed,
  contact,
  titleText,
  worksTextsItem,
  logos,

  moduleText,
  moduleImage,
  moduleImages,
  moduleTextImage,
  moduleEmbed,
  compositionItemImage,
  compositionItemText,
  compositionItemEmbed,
  moduleCompositionUI,
]

export default schemaTypes
