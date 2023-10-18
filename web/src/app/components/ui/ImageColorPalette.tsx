import React from "react"
import { SanityImageAsset } from "sanity-codegen"

type Props = {
  image: SanityImageAsset
}

const ImageColorPalette = ({ image }: Props) => {
  // const palette = [
  //   "lightMuted",
  //   "muted",
  //   "darkMuted",
  //   "dominant",
  //   "lightVibrant",
  //   "vibrant",
  //   "darkVibrant",
  // ]
  return (
    <div className="image-color-palette grid grid-cols-3 z-50 text-sm">
      <div
        className="aspect-square center-x-y ellipsis "
        style={{
          backgroundColor: image.metadata.palette.lightMuted.background,
        }}
      >
        <span className="opacity-0">lightMuted</span>
      </div>
      <div
        className="aspect-square center-x-y ellipsis "
        style={{
          backgroundColor: image.metadata.palette.muted.background,
        }}
      >
        <span className="opacity-0">muted</span>
      </div>
      <div
        className="aspect-square center-x-y ellipsis "
        style={{
          backgroundColor: image.metadata.palette.darkMuted.background,
        }}
      >
        <span className="opacity-0">darkMuted</span>
      </div>
      {/* <div
        className="aspect-square center-x-y ellipsis "
        style={{
          backgroundColor: image.metadata.palette.dominant.background,
        }}
      >
        dominant
      </div>
      <div
        className="aspect-square center-x-y ellipsis "
        style={{
          backgroundColor: image.metadata.palette.lightVibrant.background,
        }}
      >
        lightVibrant
      </div>
      <div
        className="aspect-square center-x-y ellipsis "
        style={{
          backgroundColor: image.metadata.palette.vibrant.background,
        }}
      >
        vibrant
      </div>
      <div
        className="aspect-square center-x-y ellipsis "
        style={{
          backgroundColor: image.metadata.palette.darkVibrant.background,
        }}
      >
        darkVibrant
      </div> */}
    </div>
  )
}

export default ImageColorPalette
