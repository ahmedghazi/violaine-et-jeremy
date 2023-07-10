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
    <div className="image-color-palette grid grid-cols-7 z-50 text-sm">
      {/* {palette.map((item, i) => (
        <div
          key={i}
          className="aspect-square center-x-y ellipsis "
          style={{
            backgroundColor: image.metadata.palette[item as keyof].background,
          }}
        >
          {item}
        </div>
      ))} */}
      <div
        className="aspect-square center-x-y ellipsis "
        style={{
          backgroundColor: image.metadata.palette.lightMuted.background,
        }}
      >
        lightMuted
      </div>
      <div
        className="aspect-square center-x-y ellipsis "
        style={{
          backgroundColor: image.metadata.palette.muted.background,
        }}
      >
        muted
      </div>
      <div
        className="aspect-square center-x-y ellipsis "
        style={{
          backgroundColor: image.metadata.palette.darkMuted.background,
        }}
      >
        darkMuted
      </div>
      <div
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
      </div>
    </div>
  )
}

export default ImageColorPalette
