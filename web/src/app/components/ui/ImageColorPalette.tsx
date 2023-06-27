import React from "react"
import { SanityImageAsset } from "sanity-codegen"

type Props = {
  image: SanityImageAsset
}

const ImageColorPalette = ({ image }: Props) => {
  return (
    <div className="flex absolute z-50">
      <div
        className="aspect-square w-1e "
        style={{
          backgroundColor: image.metadata.palette.lightMuted.background,
        }}
      ></div>
      <div
        className="aspect-square w-1e "
        style={{
          backgroundColor: image.metadata.palette.muted.background,
        }}
      ></div>
      <div
        className="aspect-square w-1e "
        style={{
          backgroundColor: image.metadata.palette.darkMuted.background,
        }}
      ></div>
      <div
        className="aspect-square w-1e "
        style={{
          backgroundColor: image.metadata.palette.dominant.background,
        }}
      ></div>
      <div
        className="aspect-square w-1e "
        style={{
          backgroundColor: image.metadata.palette.lightVibrant.background,
        }}
      ></div>
      <div
        className="aspect-square w-1e "
        style={{
          backgroundColor: image.metadata.palette.vibrant.background,
        }}
      ></div>
    </div>
  )
}

export default ImageColorPalette
