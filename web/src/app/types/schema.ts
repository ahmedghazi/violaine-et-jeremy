export declare type SanityReference<T> = T & {
  _ref: string
}

export declare type SanityKeyedReference<T> = T & {
  _key: string
  _ref: string
}

import type {
  // SanityReference,
  // SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen"

export type {
  // SanityReference,
  // SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
}

/**
 * Settings (header, footer)
 *
 *
 */
export interface Settings extends SanityDocument {
  _type: "settings"

  /**
   * SEO — `seo`
   *
   *
   */
  seo?: Seo

  /**
   * navWorksLabel — `string`
   *
   *
   */
  navWorksLabel?: string

  /**
   * Navworks (works, design) — `array`
   *
   *
   */
  navWorks?: Array<SanityKeyed<LinkInternal>>

  /**
   * Nav studio (foundry, infos) — `array`
   *
   *
   */
  navStudio?: Array<SanityKeyed<LinkInternal> | SanityKeyed<LinkExternal>>

  /**
   * Footer Links — `array`
   *
   *
   */
  links?: Array<SanityKeyed<TitleText>>

  /**
   * Link legals — `reference`
   *
   *
   */
  linkLegals?: SanityReference<PageModulaire>

  /**
   * logos — `array`
   *
   *
   */
  logos?: Array<SanityKeyed<Logos>>

  /**
   * Message 404 — `blockContent`
   *
   *
   */
  message404?: BlockContent

  /**
   * Message cookies — `blockContent`
   *
   *
   */
  messageCookies?: BlockContent
}

/**
 * Home
 *
 *
 */
export interface Home extends SanityDocument {
  _type: "home"

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo

  /**
   * Slug — `slug`
   *
   * URL based on the title (no space, or char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string }

  /**
   * video — `video`
   *
   *
   */
  video?: Video

  /**
   * text — `blockContent`
   *
   *
   */
  text?: BlockContent

  /**
   * Projects featured — `array`
   *
   *
   */
  projects?: Array<SanityKeyedReference<Project | Space>>
}

/**
 * Infos
 *
 *
 */
export interface Infos extends SanityDocument {
  _type: "infos"

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Slug — `slug`
   *
   * URL based on the title (no space, or char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string }

  /**
   * Text — `blockContent`
   *
   *
   */
  text?: BlockContent

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

/**
 * Page Modulaire
 *
 *
 */
export interface PageModulaire extends SanityDocument {
  _type: "pageModulaire"

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo

  /**
   * Title — `string`
   *
   * Le nom de la page
   */
  title?: string

  /**
   * Slug — `slug`
   *
   * URL based on the title (no space, or char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string }

  /**
   * content — `array`
   *
   *
   */
  content?: Array<SanityKeyed<CompositionUI>>
}

/**
 * Work
 *
 *
 */
export interface Work extends SanityDocument {
  _type: "work"

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Slug — `slug`
   *
   * URL based on the title (no space, or char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string }

  /**
   * works images — `array`
   *
   *
   */
  worksImages?: Array<SanityKeyedReference<Project | Space>>

  /**
   * works texts — `array`
   *
   *
   */
  worksTexts?: Array<SanityKeyed<WorksTextsItem>>
}

/**
 * Project
 *
 *
 */
export interface Project extends SanityDocument {
  _type: "project"

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Slug — `slug`
   *
   * URL based on the title (no space, or char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string }

  /**
   * description — `string`
   *
   * Short desc, visible on home page
   */
  description?: string

  /**
   * Image home — `image`
   *
   * visible on home page
   */
  imageHome?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Image home mobile — `image`
   *
   * visible on home page
   */
  imageHomeMobile?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Image Cover — `image`
   *
   * visible on works image
   */
  imageCover?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * colorPalette — `array`
   *
   *
   */
  colorPalette?: Array<SanityKeyed<Color>>

  /**
   * Image Intro — `image`
   *
   * visible on project page next to text intro
   */
  imageIntro?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Text — `blockContent`
   *
   *
   */
  text?: BlockContent

  /**
   * textIntroDrapeau — `boolean`
   *
   * default false
   */
  textIntroDrapeau?: boolean

  /**
   * look — `string`
   *
   * Page look, default or double scroll with sticky text
   */
  look?: "default" | "split"

  /**
   * job — `string`
   *
   *
   */
  job?: string

  /**
   * year — `number`
   *
   *
   */
  year?: number

  /**
   * client — `string`
   *
   *
   */
  client?: string

  /**
   * industry — `string`
   *
   *
   */
  industry?: string

  /**
   * location — `string`
   *
   *
   */
  location?: string

  /**
   * content — `array`
   *
   * modular content zone (image, images, text)
   */
  content?: Array<SanityKeyed<CompositionUI>>

  /**
   * credits — `array`
   *
   *
   */
  credits?: Array<SanityKeyed<Contact>>

  /**
   * links — `array`
   *
   *
   */
  links?: Array<SanityKeyed<Contact>>

  /**
   * Work related — `array`
   *
   *
   */
  related?: Array<SanityKeyedReference<Project | Space>>
}

/**
 * Space
 *
 *
 */
export interface Space extends SanityDocument {
  _type: "space"

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Slug — `slug`
   *
   * URL based on the title (no space, or char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string }

  /**
   * description — `string`
   *
   * Short desc, visible on home page
   */
  description?: string

  /**
   * Image home — `image`
   *
   * visible on home page
   */
  imageHome?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Image home mobile — `image`
   *
   * visible on home page
   */
  imageHomeMobile?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Image Cover — `image`
   *
   * visible on works image
   */
  imageCover?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * colorPalette — `array`
   *
   *
   */
  colorPalette?: Array<SanityKeyed<Color>>

  /**
   * Image Intro — `image`
   *
   * visible on project page next to text intro
   */
  imageIntro?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Text — `blockContent`
   *
   *
   */
  text?: BlockContent

  /**
   * textIntroDrapeau — `boolean`
   *
   * default false
   */
  textIntroDrapeau?: boolean

  /**
   * look — `string`
   *
   * Page look, default or double scroll with sticky text
   */
  look?: "default" | "split"

  /**
   * job — `string`
   *
   *
   */
  job?: string

  /**
   * year — `number`
   *
   *
   */
  year?: number

  /**
   * client — `string`
   *
   *
   */
  client?: string

  /**
   * industry — `string`
   *
   *
   */
  industry?: string

  /**
   * location — `string`
   *
   *
   */
  location?: string

  /**
   * content — `array`
   *
   * modular content zone (image, images, text)
   */
  content?: Array<SanityKeyed<CompositionUI>>

  /**
   * credits — `array`
   *
   *
   */
  credits?: Array<SanityKeyed<Contact>>

  /**
   * links — `array`
   *
   *
   */
  links?: Array<SanityKeyed<Contact>>

  /**
   * Work related — `array`
   *
   *
   */
  related?: Array<SanityKeyedReference<Project | Space>>
}

/**
 * Tag
 *
 *
 */
export interface Tag extends SanityDocument {
  _type: "tag"

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Description — `text`
   *
   *
   */
  description?: string
}

export type Seo = {
  _type: "seo"
  /**
   * Meta title — `string`
   *
   *
   */
  metaTitle?: string

  /**
   * Meta description — `string`
   *
   * ~155-160 characters
   */
  metaDescription?: string

  /**
   * Meta image — `image`
   *
   * jpg ou png au format paysage 2:1 (ex: 1200x600px)
   */
  metaImage?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

export type LinkInternal = {
  _type: "linkInternal"
  /**
   * label — `string`
   *
   *
   */
  label?: string

  /**
   * link — `reference`
   *
   *
   */
  link?: SanityReference<Work | Project | Infos | Home>
}

export type LinkExternal = {
  _type: "linkExternal"
  /**
   * Label — `string`
   *
   *
   */
  label?: string

  /**
   * Link — `string`
   *
   *
   */
  link?: string
}

export type LinkIcon = {
  _type: "linkIcon"
  /**
   * Label — `string`
   *
   *
   */
  label?: string

  /**
   * Link — `url`
   *
   *
   */
  link?: string

  /**
   * icon — `image`
   *
   *
   */
  icon?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<TextIcon>
  | SanityKeyed<{
      _type: "image"
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }>
  | SanityKeyed<Embed>
>

export type TextIcon = {
  _type: "textIcon"
  /**
   * icon — `image`
   *
   *
   */
  icon?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

export type Video = {
  _type: "video"
  /**
   * url — `url`
   *
   *
   */
  url?: string

  /**
   * placeholder — `image`
   *
   *
   */
  placeholder?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Aspect Ratio — `string`
   *
   * width / height
   */
  aspectRatio?: string
}

export type Embed = {
  _type: "embed"
  /**
   * url — `url`
   *
   *
   */
  url?: string
}

export type Contact = {
  _type: "contact"
  /**
   * label — `string`
   *
   *
   */
  label?: string

  /**
   * value — `string`
   *
   *
   */
  value?: string

  /**
   * url — `string`
   *
   *
   */
  url?: string
}

export type TitleText = {
  _type: "titleText"
  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * text — `blockContent`
   *
   *
   */
  text?: BlockContent
}

export type WorksTextsItem = {
  _type: "worksTextsItem"
  /**
   * Has Link ? — `boolean`
   *
   *
   */
  hasLink?: boolean

  /**
   * work — `reference`
   *
   *
   */
  work?: SanityReference<Project | Space>
}

export type Logos = {
  _type: "logos"
  /**
   * items — `array`
   *
   *
   */
  items?: Array<
    SanityKeyed<{
      _type: "image"
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }>
  >
}

export type TextUI = {
  _type: "textUI"
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string

  /**
   * Text — `blockContent`
   *
   *
   */
  text?: BlockContent

  /**
   * align — `string`
   *
   * Alignement vertical
   */
  align?: "start" | "center" | "end"
}

export type ImageUI = {
  _type: "imageUI"
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * width — `number`
   *
   * in percentage (default 100)
   */
  width?: number

  /**
   * Image caption — `text`
   *
   *
   */
  caption?: string
}

export type ImagesUI = {
  _type: "imagesUI"
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string

  /**
   * images — `array`
   *
   *
   */
  images?: Array<SanityKeyed<ImageUI>>

  /**
   * width — `number`
   *
   * in percentage
   */
  idth?: number

  /**
   * Image caption — `text`
   *
   *
   */
  caption?: string
}

export type TextImageUI = {
  _type: "textImageUI"
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string

  /**
   * Text — `blockContent`
   *
   *
   */
  text?: BlockContent

  /**
   * image — `image`
   *
   *
   */
  image?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

export type ModuleEmbed = {
  _type: "moduleEmbed"
  /**
   * Title — `string`
   *
   * Title
   */
  title?: string

  /**
   * embed — `embed`
   *
   *
   */
  embed?: Embed

  /**
   * defaultUi — `boolean`
   *
   * show vimeo default ui (for password protected videos for example)
   */
  defaultUi?: boolean
}

export type CompositionItemImage = {
  _type: "compositionItemImage"
  /**
   * title — `string`
   *
   * Module title
   */
  title?: string

  /**
   * gridSize — `string`
   *
   *
   */
  gridSize?: "quarter" | "third" | "half" | "full"

  /**
   * gridArea — `string`
   *
   *
   */
  gridArea?:
    | "1/1/2/2"
    | "1/2/2/3"
    | "1/3/2/4"
    | "1/1/2/2"
    | "2/1/3/2"
    | "1/2/2/2"
    | "2/2/2/2"
    | "1/1/3/2"
    | "1/2/3/2"

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

export type CompositionItemText = {
  _type: "compositionItemText"
  /**
   * title — `string`
   *
   * Module title
   */
  title?: string

  /**
   * gridSize — `string`
   *
   *
   */
  gridSize?: "quarter" | "third" | "half" | "full"

  /**
   * gridArea — `string`
   *
   *
   */
  gridArea?:
    | "1/1/2/2"
    | "1/2/2/3"
    | "1/3/2/4"
    | "1/1/2/2"
    | "2/1/3/2"
    | "1/2/2/2"
    | "2/2/2/2"
    | "1/1/3/2"
    | "1/2/3/2"

  /**
   * align — `string`
   *
   * Alignement vertical
   */
  align?: "start" | "center" | "end"

  /**
   * text — `blockContent`
   *
   *
   */
  text?: BlockContent
}

export type CompositionItemEmbed = {
  _type: "compositionItemEmbed"
  /**
   * title — `string`
   *
   * Module title
   */
  title?: string

  /**
   * gridSize — `string`
   *
   *
   */
  gridSize?: "quarter" | "third" | "half" | "full"

  /**
   * gridArea — `string`
   *
   *
   */
  gridArea?:
    | "1/1/2/2"
    | "1/2/2/3"
    | "1/3/2/4"
    | "1/1/2/2"
    | "2/1/3/2"
    | "1/2/2/2"
    | "2/2/2/2"
    | "1/1/3/2"
    | "1/2/3/2"

  /**
   * embed — `embed`
   *
   *
   */
  embed?: Embed
}

export type CompositionUI = {
  _type: "compositionUI"
  /**
   * title — `string`
   *
   * Module title
   */
  title?: string

  /**
   * items — `array`
   *
   *
   */
  items?: Array<
    | SanityKeyed<CompositionItemImage>
    | SanityKeyed<CompositionItemText>
    | SanityKeyed<CompositionItemEmbed>
  >

  /**
   * gutter — `boolean`
   *
   * Gouttière?
   */
  gutter?: boolean
}

export type Documents =
  | Settings
  | Home
  | Infos
  | PageModulaire
  | Work
  | Project
  | Space
  | Tag
